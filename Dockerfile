# ---- Base ----
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat
ENV NEXT_TELEMETRY_DISABLED=1

# ---- Deps (with dev deps; used by dev & build) ----
FROM base AS deps
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* .npmrc* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# ---- Builder (prod build) ----
FROM base AS builder
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Standalone output for tiny runtime
RUN npm run build

# ---- Runner (prod runtime) ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Non-root
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Only what the server needs
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

RUN apk add --no-cache wget

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1:3000/ || exit 1
USER nextjs
CMD ["node", "server.js"]

# ---- Dev (hot-reload runtime) ----
FROM base AS dev
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
# source is bind-mounted in compose; keep image lean
EXPOSE 3000
CMD ["npm", "run", "dev"]

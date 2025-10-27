# Mokse Website

This is a [Next.js](https://nextjs.org/) project containerized with Docker and MongoDB, built for local development and easy deployment.
The stack includes:

- Next.js 14+
- Node.js 20 (Alpine)
- MongoDB 7 (containerized)
- Docker Compose (single-file setup for dev & prod)

## Getting Started

1️⃣ Prerequisites

Make sure you have these installed:

- [Docker & Docker Compose](https://docs.docker.com/get-docker/)
- [Node.js 20+](https://nodejs.org/) (optional for local non-Docker testing)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass) (optional GUI)

2️⃣ Environment Setup

Copy the example environment file and adjust values if needed:

```bash
cp .env.example .env
```

Update secrets (especially for production):

```bash
MONGO_ROOT_PASS=your-secure-password
MONGO_APP_PASS=your-secure-password
```

3️⃣ Start the Project (Docker)

Run the full stack — Next.js + MongoDB — with one command:

```bash
docker compose up --build
```

After it builds, visit:

[http://localhost:3000](http://localhost:3000)

This will:

- Start the web container in hot-reload dev mode.
- Start the mongo container with persistent data stored in a local volume.
- Auto-create a MongoDB appuser for your web app.

4️⃣ Local Development Commands

To view container status:

```bash
docker compose ps
```

To open Mongo shell inside the container:

```bash
docker exec -it mongo mongosh -u root -p changeme --authenticationDatabase admin
```

To inspect Mongo logs:

```bash
docker compose logs mongo | tail -n 20
```

5️⃣ Connect with MongoDB Compass (Optional)

If you want to browse your data visually, connect using:

```bash
mongodb://root:changeme@localhost:27017/mokse?authSource=admin
```

Replace credentials as needed.

6️⃣ Switching to Production Mode

Build and run with optimized production settings:

```bash
export COMPOSE_PROFILES=prod BUILD_TARGET=runner NODE_ENV=production
docker compose --env-file .env up --build -d
```

This will:

- Use the runner stage from the Dockerfile.
- Disable bind mounts and hot reload.
- Keep Mongo isolated (port not exposed if MONGO_PORT is blank).

## Project Structure

```init
.
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── docker/
│   └── mongo/
│       └── init/
│           └── 01-create-app-user.js
├── app/
│   └── page.tsx
├── public/
├── package.json
└── README.md
```

## Environment Variables

|Variable | Description | Default |
|-----------|---------------|---------|
|COMPOSE_PROFILES | Compose profile (dev or prod) | dev |
|BUILD_TARGET | Docker build stage (dev or runner) | dev |
|APP_PORT | Port exposed on host | 3000 |
|NODE_ENV | Node environment | development |
|MONGO_PORT | Mongo host port (omit for prod) | 27017 |
|MONGO_DB | Database name | mokse |
|MONGO_ROOT_USER | Root Mongo user | root |
|MONGO_ROOT_PASS | Root password | changeme |
|MONGO_APP_USER | App DB user | appuser |
|MONGO_APP_PASS | App DB password | apppass |
|MONGODB_URI | App Mongo connection string | `mongodb://${MONGO_APP_USER}:${MONGO_APP_PASS}@mongo:27017/${MONGO_DB}?authSource=admin` |

## Useful Commands

| Task | Command |
|------|---------|
| Rebuild containers | docker compose build |
| Restart stack | docker compose restart |
| Stop containers | docker compose down |
| Remove all volumes | docker compose down -v |
| Shell into web container | docker exec -it $(docker compose ps -q web) sh |
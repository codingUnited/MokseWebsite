import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    breakpoints: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
      xLarge: "1440px",
      "2XLarge": "2560px",
    },
    tokens: {
      colors: {
        brand: {
          primary: {
            1: { value: "#f8f7f7" },
            2: { value: "#43c0b3" },
          },
          complimentary: {
            1: { value: "#233d00" },
            2: { value: "#0c045c" },
            3: { value: "#e8fdfc" },
            4: { value: "#545454" },
          },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          Mblush: { value: "{colors.brand.primary.1}" },
          Mturquoise: { value: "{colors.brand.primary.2}" },
          Mgreen: { value: "{colors.brand.complimentary.1}" },
          Mblue: { value: "{colors.brand.complimentary.2}" },
          Mwhite: { value: "{colors.brand.complimentary.3}" },
          Mgray: { value: "{colors.brand.complimentary.4}" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
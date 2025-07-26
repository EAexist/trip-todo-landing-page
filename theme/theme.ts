import {createSystem, defaultConfig, defineConfig} from '@chakra-ui/react'
import {headingRecipe} from '@/components/recipe/heading.recipe'
import {textRecipe} from '@/components/recipe/text.recipe'
import {flexRecipe} from '@/components/recipe/flex.recipe'
import {buttonRecipe} from '@/components/recipe/button.recipe'
import {cardRecipe} from '@/components/recipe/card.recipe'

export const appConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: {value: 'var(--font-pretendard-variable)'},
        body: {value: 'var(--font-pretendard-variable)'},
        // mono: { value: "var(--font-pretendard-variable)" },
      },
      colors: {
        brand: {
          50: {value: '#CCE2FF'},
          100: {value: '#99C5FE'},
          200: {value: '#66A9FE'},
          300: {value: '#338CFD'},
          400: {value: '#006FFD'},
          500: {value: '#006FFD'},
          600: {value: '#0059CA'},
          700: {value: '#004398'},
          800: {value: '#002C65'},
          900: {value: '#001633'},
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: {value: '{colors.brand.500}'},
          // contrast: { value: "{colors.brand.100}" },
          // fg: { value: "{colors.brand.700}" },
          // muted: { value: "{colors.brand.100}" },
          // subtle: { value: "{colors.brand.200}" },
          // emphasized: { value: "{colors.brand.300}" },
          // focusRing: { value: "{colors.brand.500}" },
        },
        neutral: {
          grey: {value: 'rgba(0,12,30,0.8)'},
          d_grey: {value: '#4D4D4D'},
          silver: {value: '#f9fafb'},
          footerBg: {value: '#191f28'},
          footerContrastText: {value: '#b0b8c1'},
        },
      },
    },
    recipes: {
      heading: headingRecipe,
      text: textRecipe,
      flex: flexRecipe,
      button: buttonRecipe,
      card: cardRecipe,
      // cardTitle:
    },
  },
})

export const system = createSystem(defaultConfig, appConfig)

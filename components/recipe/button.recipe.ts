import {defineRecipe} from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
  base: {
    color: 'white',
    colorPalette: 'brand',
    fontWeight: 'semibold',
    width: 'fit-content',
    borderRadius: '2xl',
  },
  variants: {
    size: {
      md: {
        fontSize: 'md',
        lineHeight: 1.5,
        px: 8,
        py: 3.5,
        height: 'fit-content',
        // px: { base: 8, md: 8 },
        // py: { base: 3.5, md: 3.5 },
      },
    },
  },
})

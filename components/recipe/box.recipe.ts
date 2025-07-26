import {defineRecipe} from '@chakra-ui/react'

export const boxRecipe = defineRecipe({
  base: {
    color: 'inherit',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    as: {
      section: {
        width: '100%',
      },
      header: {
        width: '100%',
      },
    },
  },
})

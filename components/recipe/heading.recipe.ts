import {defineRecipe} from '@chakra-ui/react'

export const headingRecipe = defineRecipe({
  base: {
    color: 'neutral.d_grey',
  },
  variants: {
    as: {
      h1: {
        as: 'h1',
        fontWeight: {base: 'bold', md: 'bold'},
        fontSize: {base: 36, md: 64},
        lineHeight: 1,
        letterSpacing: -0.5,
      },
      h2: {
        as: 'h2',
        fontWeight: 'bold',
        fontSize: {base: 24, md: 36},
        lineHeight: 1.2,
        letterSpacing: -0.5,
      },
      h3: {
        as: 'h3',
        fontWeight: 'bold',
        fontSize: {base: 21, md: 28},
        lineHeight: 1.2,
        letterSpacing: -0.5,
      },
      h4: {
        as: 'h4',
        fontWeight: 'bold',
        fontSize: {base: 17, md: 20},
        lineHeight: 1.2,
        letterSpacing: -0.5,
      },
    },
  },
})

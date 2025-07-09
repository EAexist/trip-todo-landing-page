import { defineRecipe } from "@chakra-ui/react";

export const headingRecipe = defineRecipe({
    base: {
        color: "neutral.d_grey",
    },
    variants: {
        as: {
            h1: {
                as: 'h1',
                fontWeight: 'bold',
                fontSize: 64,
                lineHeight: 1,
                letterSpacing: -0.5
            },
            h2: {
                as: 'h2',
                fontWeight: 'bold',
                fontSize: 36,
                lineHeight: 1.2,
                letterSpacing: -0.5
            },
            h3: {
                as: 'h3',
                fontWeight: 'bold',
                fontSize: 28,
                lineHeight: 1.2,
                letterSpacing: -0.5
            },
            h4: {
                as: 'h4',
                fontWeight: 'bold',
                fontSize: 20,
                lineHeight: 1.2,
                letterSpacing: -0.5
            },
        },
        h1: {
            true: {
                as: 'h1',
                fontWeight: 'bold',
                fontSize: 64,
                lineHeight: 76,
            },
        },
        h2: {
            true: {
                as: 'h2',
                fontWeight: 'bold',
                fontSize: 36,
                lineHeight: 44,
            },
        },
        h3: {
            true: {
                as: 'h3',
                fontWeight: 'bold',
                fontSize: 28,
                lineHeight: 36,
            },
        },
        h4: {
            true: {
                as: 'h4',
                fontWeight: 'bold',
                fontSize: 20,
                lineHeight: 28,
            },
        },
    },
})
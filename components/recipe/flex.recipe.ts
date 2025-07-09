import { defineRecipe } from "@chakra-ui/react";

export const flexRecipe = defineRecipe({
    base: {
        color: "inherit",
    },
    variants: {
        as: {
            section: {
                width: '100%',
            },
        },
    },
})
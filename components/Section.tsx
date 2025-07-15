import {
    Flex,
    FlexProps
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const Section = ({ children, ...props }: PropsWithChildren<FlexProps>) => {
    return (
        <Flex as="section" justify={"center"} {...props} px={{ base: 6, md: 12 }}>
            {children}
        </Flex>
    )
}
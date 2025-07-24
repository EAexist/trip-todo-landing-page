import {
    Flex,
    FlexProps
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const Section = ({ children, ...props }: PropsWithChildren<FlexProps>) => {
    return (
        <Flex as="section" justify={"center"} px={{ base: 0, md: 12 }} {...props} >
            {children}
        </Flex>
    )
}
import {
    Box,
    Button,
    Flex,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Section } from './Section'

interface FeatureSectionProps {
    title: ReactNode
    body: ReactNode
    image: ReactNode
}
export const LandingPageSection = ({ title, body, image }: FeatureSectionProps) => {
    return (
        <Section>
            <Stack
                maxWidth={'7xl'}
                width={'100%'}
                align={'center'}
                justifyContent={'center'}
                gap={{ base: 12, md: 12 }}
                px={{ base: 36, md: 36 }}
                py={{ base: 24, md: 24 }}
                direction={{ base: 'column', md: 'row' }}>
                {image}
                <Stack gap={{ base: 8, md: 8 }} flex={1}>
                    <Stack gap={{ base: 4, md: 4 }}>
                        <Heading as="h2">
                            {title}
                        </Heading>
                        <Text fontSize={"md"} fontWeight={"regular"} >
                            {body}
                        </Text>
                    </Stack>
                    <Button>
                        앱 미리보기
                    </Button>
                </Stack>
            </Stack>
        </Section>
    )
}
import {
    Button,
    Stack
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Section } from './Section'

interface HeroSectionProps {
    title: ReactNode
    body: ReactNode
    image: ReactNode
}
export const HeroSection = ({ title, body, image }: HeroSectionProps) => {
    return (
        <Section backgroundColor={"neutral.silver"} py={{ base: 28, md: 36, lg: 36 }} >
            <Stack
                flex={1}
                maxWidth={'7xl'}
                width={'100%'}
                align={'center'}
                gap={{ base: 104, md: 104 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={'1 0 auto'} width={'fit-content'} gap={{ base: 8, md: 8 }}>
                    <Stack flex={1} gap={{ base: 4, md: 4 }}>
                        {title}
                        {body}
                    </Stack>
                    <Button>
                        앱 미리보기
                    </Button>
                </Stack>
                {image}
            </Stack>
        </Section>
    )
}

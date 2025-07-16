'use client'

import {
    Box,
    chakra,
    Heading,
    Stack,
    Text,
    VisuallyHidden
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Logo } from './Logo'
import { Section } from './Section'
import { useColorModeValue } from './ui/color-mode'


const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            // href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Heading as="h4" color="white">
            {children}
        </Heading>
    )
}

export default function LargeWithNewsletteLandingPageFooter() {
    return (
        <Section
            as="footer"
            bg={"neutral.black"}
            color={"neutral.silver"}
            px={{ base: 40, md: 40, }}
            py={{ base: 16, md: 16, }}>
            <Stack maxWidth={"7xl"} width={"100%"} direction={{ base: "row", md: "row", }} gap={{ base: 0, md: 120 }}>
                <Stack gap={6}>
                    <Stack gap={2}>
                        <Box>
                            <Logo />
                        </Box>
                        <Text color={"neutral.silver"} fontSize={'sm'}>© 2025 EAexist.<br />All rights reserved</Text>
                    </Stack>
                    <Stack direction={'row'} gap={6} alignItems={"center"}>
                        <SocialButton label={'Github'} href={'#'}>
                            <FaGithub />
                        </SocialButton>
                    </Stack>
                </Stack>
                <Stack direction="row" gap={{ base: 0, md: 7 }}>
                    <Stack gap={{ base: 6, md: 6 }} minW={{ base: 0, md: 40 }}>
                        <ListHeader>EAexist</ListHeader>
                        <Stack gap={{ base: 3, md: 3 }}>
                            <Box asChild>
                                <a href={"https://github.com/EAexist"}>
                                    <Text color={"neutral.silver"} fontWeight={"regular"} fontSize={"sm"}>
                                        About Me
                                    </Text>
                                </a>
                            </Box>
                            <Box asChild>
                                <a href={"https://github.com/EAexist"}>
                                    <Text color={"neutral.silver"} fontWeight={"regular"} fontSize={"sm"}>
                                        Github
                                    </Text>
                                </a>
                            </Box>
                        </Stack>
                    </Stack>
                    {/* <Stack gap={{ base: 6, md: 6 }} minW={{ base: 0, md: 40 }}>
                        <ListHeader>Support</ListHeader>
                        <Box as="a">
                            <Text color={"neutral.silver"} fontWeight={"regular"} fontSize={"sm"}>
                                Help Center</Text>
                        </Box>
                    </Stack> */}
                </Stack>
            </Stack>
        </Section>
    )
}
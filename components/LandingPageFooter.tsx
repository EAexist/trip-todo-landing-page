'use client'

import {
    Box,
    chakra,
    Heading,
    Image,
    Stack,
    Text,
    VisuallyHidden
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Section } from './Section'
import { useColorModeValue } from './ui/color-mode'
import { Logo } from './Logo'


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
            <Stack maxWidth={"7xl"} width={"100%"} direction={{ base: "row", md: "row", }} gap={{ base: 120, md: 120 }}>
                <Stack gap={6}>
                    <Box>
                        <Logo />
                    </Box>
                    <Text color={"neutral.silver"} fontSize={'sm'}>© 2025 EAexist.<br />All rights reserved</Text>
                    <Stack direction={'row'} gap={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Stack>
                <Stack direction="row" gap={{ base: 7, md: 7, }}>
                    <Stack gap={{ base: 6, md: 6 }} minW={160}>
                        <ListHeader>EAexist</ListHeader>
                        <Stack gap={{ base: 3, md: 3 }}>
                            <Box as="a">
                                <Text color={"neutral.silver"} fontWeight={"regular"} fontSize={"sm"}>
                                    About Us</Text>
                            </Box>
                            <Box as="a">
                                <Text color={"neutral.silver"} fontWeight={"regular"} fontSize={"sm"}>
                                    Github</Text>
                            </Box>
                            <Box as="a">
                                <Text color={"neutral.silver"} fontWeight={"regular"} fontSize={"sm"}>
                                    Contact Us</Text>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack gap={{ base: 6, md: 6 }} minW={160}>
                        <ListHeader>Support</ListHeader>
                        <Box as="a">
                            <Text color={"neutral.silver"} fontWeight={"regular"} fontSize={"sm"}>
                                Help Center</Text>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Section>
    )
}
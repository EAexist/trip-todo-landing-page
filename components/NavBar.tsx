"use client"

import {
    Box,
    Flex,
    LinkBox,
    LinkOverlay,
    Stack,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { useColorModeValue } from './ui/color-mode'

export default function NavBar() {
    const { open, onToggle } = useDisclosure()

    return (
        <Box as="header" position="fixed" w={"100%"} bg={"white"} zIndex={1000}>
            <Flex
                minH={'60px'}
                align={'center'}
                flex={1}
                px={{ base: 6, md: 6 }}
            >
                {/* <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        // icon={open ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex> */}

                <LinkBox
                    as="button">
                    <LinkOverlay
                        href={'/'} ><Logo color={'gray.800'} /></LinkOverlay>
                </LinkBox>
                <Flex flex={1} justify={{ base: 'center', md: 'center' }} paddingRight={40} >
                    <DesktopNav />
                </Flex>
            </Flex>
            {/* <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse> */}
        </Box>
    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')

    return (
        <Stack direction={'row'} gap={10} >
            {NAV_ITEMS.map((navItem) => (
                <LinkBox
                    key={navItem.label}
                    as="button"
                    p={2}
                    fontSize={'md'}
                    fontWeight={'semibold'}
                    color={linkColor}
                    _hover={{
                        textDecoration: 'none',
                        color: linkHoverColor,
                    }}>
                    <LinkOverlay
                        href={navItem.href ?? '#'} />
                    {navItem.label}
                </LinkBox>
            ))}
        </Stack>
    )
}

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, href }: NavItem) => {

    return (
        <LinkBox
            py={2}
            as="button"
            justifyContent="space-between"
            alignItems="center"
            _hover={{
                textDecoration: 'none',
            }}>
            {/* <LinkOverlay
                href={href ?? '#'} /> */}
            <Text fontWeight={600}
                color={useColorModeValue('gray.600', 'gray.200')}
            >
                {label}
            </Text>
        </LinkBox>
    )
}

interface NavItem {
    label: string
    subLabel?: string
    children?: Array<NavItem>
    href?: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'TRIP TODO',
        href: '/',
    },
    {
        label: '앱 미리보기',
        href: 'trial',
    },
    {
        label: 'CONTACT',
        href: '#',
    },
]
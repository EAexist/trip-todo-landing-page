"use client"

import {
    Flex,
    IconButton,
    LinkBox,
    LinkOverlay,
    Stack,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { useColorModeValue } from './ui/color-mode'

export default function NavBar() {
    const { open, onToggle } = useDisclosure()

    return (
        <Flex as="header" position="fixed" bg={"white"} zIndex={1000} w={"100vw"} >
            <Flex
                minH={'60px'}
                align={'center'}
                flex={1}
                px={{ base: 2, md: 6 }}
            >
                <Flex
                    hideFrom={"md"}
                // flex={{ base: 1, md: 'auto' }}
                // ml={{ base: -2 }}
                >
                    <IconButton
                        onClick={onToggle}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    >
                        {open ? <X width={3} /> : <Menu width={5} />}
                    </IconButton>
                </Flex>
                <Flex flex={{ base: 1, md: 'none' }} paddingRight={{ base: 10, md: 0 }} justify={{ base: 'center' }} >
                    <LinkBox
                        as="button" >
                        <LinkOverlay
                            href={'/'}><Logo color={'gray.800'} /></LinkOverlay>
                    </LinkBox>
                </Flex>
                <Flex hideBelow={"md"} flex={1} justify={{ base: 'center', md: 'center' }} paddingRight={40}>
                    <DesktopNav />
                </Flex>
            </Flex>
            {/* <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse> */}
        </Flex>
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
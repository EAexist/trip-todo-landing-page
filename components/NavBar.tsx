'use client'

import {
  Collapsible,
  Flex,
  HStack,
  Icon,
  IconButton,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import {Menu, X} from 'lucide-react'
import {Logo} from './Logo'
import {useColorModeValue} from './ui/color-mode'
import {HTMLAttributeAnchorTarget, useState} from 'react'

export default function NavBar() {
  //   const {open, onToggle} = useDisclosure()

  const [open, setOpen] = useState(false)

  return (
    <Collapsible.Root
      onOpenChange={({open}) => setOpen(open)}
      bg={'rgba(255, 255, 255, 0.5)'}
      backdropFilter={'blur(10px)'}
      as="header"
      position="fixed"
      zIndex={1000}
      w={'100vw'}
      display={'flex'}
      flexDir={'column'}>
      <Flex
        h={{base: 12, md: '60px'}}
        align={'center'}
        // position={{base: 'absolute', md: 'static'}}
        // flex={1}
        px={{base: 2, md: 6}}>
        <Flex
          hideFrom={'md'}
          // flex={{ base: 1, md: 'auto' }}
          // ml={{ base: -2 }}
        >
          <Collapsible.Trigger
            aria-label={'Toggle Navigation'}
            p={1}
            hideFrom={'md'}>
            {open ? <X width={24} /> : <Menu width={24} />}
          </Collapsible.Trigger>
        </Flex>
        <Flex
          flex={{base: 1, md: 'none'}}
          paddingRight={{base: 10, md: 0}}
          w={{md: 120}}
          justify={{base: 'center'}}>
          <LinkBox as="button">
            <LinkOverlay href={'/'}>
              <Logo color={'gray.800'} fontSize={'md'} />
            </LinkOverlay>
          </LinkBox>
        </Flex>
        <Flex
          hideBelow={'md'}
          flex={1}
          justify={{base: 'center', md: 'center'}}
          paddingRight={120}>
          <DesktopNav />
        </Flex>
      </Flex>
      <Collapsible.Content h={'100vh'} hideFrom={'md'}>
        <MobileNav />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')

  return (
    <HStack gap={10}>
      {NAV_ITEMS.map(navItem => (
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
          <LinkOverlay href={navItem.href ?? '#'} target={navItem.target} />
          {navItem.label}
        </LinkBox>
      ))}
    </HStack>
  )
}

const MobileNav = () => {
  return (
    <Stack dir={'column'} p={6}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({label, href, target}: NavItem) => {
  return (
    <LinkBox
      py={2}
      as="button"
      //   justifyContent="space-between"
      //   alignItems="flex-start"
      _hover={{
        textDecoration: 'none',
      }}>
      <LinkOverlay target={target} href={href ?? '#'} />
      <Text
        fontWeight={600}
        color={useColorModeValue('gray.600', 'gray.200')}
        textAlign={'start'}>
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
  target?: HTMLAttributeAnchorTarget
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
    href: process.env.NEXT_PUBLIC_EAEXIST_GITHUB_URL,
    target: '_blank',
  },
]

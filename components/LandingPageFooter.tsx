// 'use client'

import {
  Box,
  Heading,
  IconButton,
  LinkOverlay,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'
import {ReactNode} from 'react'
import {FaGithub} from 'react-icons/fa'
import {Logo} from './Logo'
import {Section} from './Section'
// import {useColorModeValue} from './ui/color-mode'
import {SiNotion} from 'react-icons/si'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href?: string
}) => {
  return (
    <IconButton
      asChild
      rounded={'full'}
      size={'xs'}
      cursor={'pointer'}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'#3C474C'}
      transition={'background 0.3s ease'}
      _hover={{
        // bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        bg: 'blackAlpha.200',
      }}
      //   p={0}
    >
      <a target="_blank" href={href}>
        {children}
      </a>
    </IconButton>
  )
}

const ListHeader = ({children}: {children: ReactNode}) => {
  return (
    <Heading as="h4" color={'neutral.footerContrastText'}>
      {children}
    </Heading>
  )
}

export default function LandingPageFooter() {
  return (
    <Section
      as="footer"
      bg={'neutral.footerBg'}
      color={'neutral.footerContrastText'}
      px={{base: 6, md: 40}}
      py={{base: 16}}
      justifyContent={{base: 'stretch', md: 'auto'}}
      pb={{md: 16}}>
      <Stack
        maxWidth={'7xl'}
        width={{base: 'auto', md: '100%'}}
        direction={{base: 'column-reverse', md: 'row'}}
        gap={{base: 8, md: 120}}>
        <Stack gap={{base: 6}}>
          <Stack gap={2}>
            <Logo color={'neutral.footerContrastText'} />
            <Text
              color={'neutral.footerContrastText'}
              fontWeight={{base: 'light', md: 'regular'}}
              fontSize={{base: 'xs', md: 'sm'}}>
              © 2025 EAexist.
              <br />
              All rights reserved
            </Text>
          </Stack>
          <Stack direction={'row'} gap={4}>
            <SocialButton
              label={'Github'}
              href={process.env.NEXT_PUBLIC_EAEXIST_GITHUB_URL}>
              <FaGithub size={20} />
            </SocialButton>
            {/* <SocialButton
              label={'Notion'}
              href={process.env.NEXT_PUBLIC_EAEXIST_RESUME_URL}>
              <SiNotion />
            </SocialButton> */}
          </Stack>
        </Stack>
        <Stack direction="row" gap={{base: 0, md: 7}} mt={{base: 1, md: 1}}>
          <Stack gap={{base: 6}} minW={{base: 0, md: 40}}>
            <ListHeader>EAexist</ListHeader>
            <Stack gap={{base: 3}}>
              {/* <Box asChild>
                <a href={process.env.NEXT_PUBLIC_EAEXIST_RESUME_URL}>
                  <Text
                    color={'neutral.footerContrastText'}
                    fontWeight={{base: 'light', md: 'regular'}}
                    fontSize={{base: 'sm'}}>
                    About Me
                  </Text>
                </a>
              </Box> */}
              <Box asChild>
                <a
                  target="_blank"
                  href={process.env.NEXT_PUBLIC_EAEXIST_GITHUB_URL}>
                  <Text
                    color={'neutral.footerContrastText'}
                    fontWeight={{base: 'light', md: 'regular'}}
                    fontSize={{base: 'sm'}}>
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

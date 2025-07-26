import {Box, Button, Flex, Stack} from '@chakra-ui/react'
import {ReactNode} from 'react'
import {Section} from './Section'

interface HeroSectionProps {
  title: ReactNode
  body: ReactNode
  image: ReactNode
}
export const HeroSection = ({title, body, image}: HeroSectionProps) => {
  return (
    <Section
      backgroundColor={'neutral.silver'}
      py={{base: 0, md: 36, lg: 36}}
      minH={{base: '100vh', md: 'auto'}}
      pt={{base: 18, md: '84px'}}
      pb={{base: 106}}>
      <Stack
        flex={1}
        maxWidth={'7xl'}
        width={'100%'}
        align={{base: 'stretch', md: 'center'}}
        gap={{base: 0, md: 104}}
        direction={{base: 'column', md: 'row'}}>
        <Stack
          flex={{base: 'none', md: '1 0 auto'}}
          width={'fit-content'}
          gap={{base: 8, md: 8}}
          padding={6}
          pt={10}>
          <Stack flex={1} gap={{base: 4, md: 4}}>
            {title}
            {body}
          </Stack>
          <Button asChild hideBelow={'md'}>
            <a href={'trial'}>앱 미리보기</a>
          </Button>
        </Stack>
        <Flex flex={1} padding={6}>
          {image}
        </Flex>
      </Stack>
    </Section>
  )
}

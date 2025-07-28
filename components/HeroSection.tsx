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
      //   py={{base: 0, md: 36, lg: 36}}
      h={{base: '100vh', md: '100vh'}}
      pt={{base: '48px', md: '84px'}}
      pb={{base: 106, md: 6}}
      px={{md: 0}}
      //   minH={{base: '100vh', md: '100vh'}}
    >
      <Stack
        flex={1}
        maxWidth={'7xl'}
        width={'100%'}
        align={{base: 'stretch', md: 'stretch'}}
        gap={{base: 0}}
        direction={{base: 'column', md: 'row'}}>
        <Stack
          flex={{base: 'none', md: 1}}
          justifyContent={{md: 'center'}}
          width={{md: 'fit-content'}}
          gap={{base: 8, md: 8}}
          padding={{base: 6, md: 6}}
          pl={{md: 12}}
          pr={{md: 0}}
          pt={{base: 10, md: 0}}>
          <Stack gap={{base: 4, md: 4}}>
            {title}
            {body}
          </Stack>
          <Button asChild hideBelow={'md'}>
            <a href={'trial'}>앱 미리보기</a>
          </Button>
        </Stack>
        <Flex
          flex={{base: 1, md: 1}}
          px={{base: 6, md: 6}}
          py={{md: 6}}
          //   height={{base: 'auto', md: '100%'}}
          alignItems={{base: 'center', md: 'center'}}
          justifyContent={{base: 'center', md: 'center'}}>
          {image}
        </Flex>
      </Stack>
    </Section>
  )
}

import {Button, Flex, Heading, Stack, Text} from '@chakra-ui/react'
import {ReactNode} from 'react'
import {Section} from './Section'

interface FeatureSectionProps {
  title: ReactNode
  body: ReactNode
  image: ReactNode
}
export const LandingPageSection = ({
  title,
  body,
  image,
}: FeatureSectionProps) => {
  return (
    <Section>
      <Stack
        maxWidth={'7xl'}
        width={'100%'}
        alignItems={{base: 'stretch', md: 'center'}}
        justifyContent={'center'}
        gap={{base: 4, md: 12}}
        py={{base: 16, md: 24}}
        px={{base: 6, md: 0}}
        direction={{base: 'column', md: 'row'}}>
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          minH={{base: 480, md: 480}}
          minW={{base: 'none', md: 480}}>
          {image}
        </Flex>
        <Stack gap={{base: 8, md: 8}} flex={1}>
          <Stack gap={{base: 4, md: 4}}>
            <Heading as="h2">{title}</Heading>
            <Text fontSize={'sm'} fontWeight={'regular'}>
              {body}
            </Text>
          </Stack>
          <Button asChild hideBelow={'md'}>
            <a href={'trial'}>앱 미리보기</a>
          </Button>
        </Stack>
      </Stack>
    </Section>
  )
}

import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import {HeroSection} from '@/components/HeroSection'
import {LandingPageSection} from '@/components/LandingPageSection'
import FeatureSummarySection from '@/components/section/FeatureSummarySection'
import {TicketFeatureSection} from '@/components/section/TicketFeatureSection'
export default async function Page() {
  return (
    <>
      <HeroSection
        title={
          <Stack>
            <Heading as={'h1'}>즐거운 여행을 위한</Heading>
            <Heading as={'h1'} color={'brand.solid'}>
              TRIP TODO
            </Heading>
          </Stack>
        }
        body={
          <>
            <Text fontSize={{base: 'sm', md: 'md'}}>
              여행은 가고 싶지만 준비할 게 너무 많아 걱정이라면
              <br />
              TRIP TODO 와 함께 간편하게 여행을 준비해보세요
            </Text>
          </>
        }
        image={<ImagePlaceHolder flex={1} flexBasis={'auto'} />}
      />
      <FeatureSummarySection />
      <LandingPageSection
        title={
          <>
            티켓과 예약 내역이 필요할 때<br />
            간편하게 꺼내보기
          </>
        }
        body={
          <>
            인터넷 브라우저, 항공사 앱, 숙소 예약 앱, 종이 티켓에 담아다니던
            예약 내역
            <br />
            이젠 한 곳에 모아 여행 중 클릭 한번으로 이용해보세요
          </>
        }
        image={
          <Image
            alt={'Hero Image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={
              'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
            }
          />
        }
      />
      <TicketFeatureSection />
      <LandingPageSection
        title={
          <>
            일일이 옮겨 적을 필요 없이
            <br />
            화면 캡쳐만으로 내 예약 관리하기
          </>
        }
        body={<>일일이 옮겨 적을 필요 없이 화면 캡쳐만으로 내 예약 관리하기</>}
        image={<ImagePlaceHolder />}
      />
      <Flex
        hideFrom={'md'}
        position={'fixed'}
        zIndex={1000}
        bottom={0}
        left={0}
        width={'100%'}
        pr={5}
        pl={5}
        pt={5}
        pb={8}>
        <Button asChild width={'100%'} py={{base: 4}}>
          <a href={'trial'}>앱 미리보기</a>
        </Button>
      </Flex>
    </>
  )
}

const ImagePlaceHolder = (props: BoxProps) => (
  <Box
    position={'relative'}
    aspectRatio={1}
    rounded={'2xl'}
    boxShadow={'2xl'}
    width={300}
    overflow={'hidden'}
    {...props}>
    <Image
      alt={'Hero Image'}
      fit={'cover'}
      align={'center'}
      w={'100%'}
      h={'100%'}
      src={
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
      }
    />
  </Box>
)

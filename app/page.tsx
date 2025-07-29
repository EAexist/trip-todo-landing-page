import {HeroSection} from '@/components/HeroSection'
import {LandingPageSection} from '@/components/LandingPageSection'
import FeatureSummarySection from '@/components/section/FeatureSummarySection'
import {TicketFeatureSection} from '@/components/section/TicketFeatureSection'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import type {Metadata, Viewport} from 'next'

export const metadata: Metadata = {
  title: 'Trip Todo',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function Page() {
  return (
    <>
      <HeroSection
        title={
          <Stack>
            <Heading as={'h1'}>즐거운 여행,</Heading>
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
        image={
          <Box
            position={'relative'}
            w={'100%'}
            h={'100%'}
            // aspectRatio={1 / 1.5}
            minW={{base: 320, md: 420}}
            minH={440}
            maxW={480}
            maxH={580}
            flex={1}
            bgImg={'url(/static/mockup-todolist.png)'}
            bgSize={'contain'}
            bgRepeat={'no-repeat'}>
            {/* <Image
              alt={'TRIP TODO 앱 메인 화면'}
              flex={1}
              w={'100%'}
              h={'100%'}
              ml={-3}
              fit={'contain'}
              src={'/static/mockup-todolist.png'}
              fetchPriority="high"
            /> */}
            <VStack
              position={'absolute'}
              top={'35%'}
              right={4}
              w={{base: 52, md: 60}}
              gap={4}>
              <Image
                loading="lazy"
                fetchPriority="low"
                alt={'할 일 항목: 항공권 예약 '}
                src={'/static/todo-flight.png'}
                shadow={'md'}
                borderRadius={'md'}
              />
              <Image
                loading="lazy"
                fetchPriority="low"
                alt={'할 일 항목: 미술관 입장권 예약 '}
                src={'/static/todo-museum.png'}
                shadow={'md'}
                borderRadius={'md'}
              />
              <Image
                loading="lazy"
                fetchPriority="low"
                alt={'할 일 항목: 환전 '}
                src={'/static/todo-currency.png'}
                shadow={'md'}
                borderRadius={'md'}
              />
              <Image
                loading="lazy"
                fetchPriority="low"
                alt={'할 일 항목: 데이터 로밍 '}
                src={'/static/todo-roaming.png'}
                shadow={'md'}
                borderRadius={'md'}
              />
            </VStack>
          </Box>
        }
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
            <Text
              hideFrom={'md'}
              fontSize={'inherit'}
              fontWeight={'inherit'}
              as={'span'}>
              브라우저, 항공사 앱, 호텔 예약 앱, 종이 티켓에 담아다니던 예약
              내역, 한 곳에 모아 여행 중 클릭 한번으로 꺼내보세요
            </Text>
            <Text
              hideBelow={'md'}
              fontSize={'inherit'}
              fontWeight={'inherit'}
              as={'span'}>
              브라우저, 항공사 앱, 호텔 예약 앱, 종이 티켓에 담아다니던 예약
              내역
              <br />
              이젠 한 곳에 모아 여행 중 클릭 한번으로 이용해보세요
            </Text>
          </>
        }
        image={
          <Box
            position={'relative'}
            // w={'100%'}
            w={320}
            h={440}
            // backgroundColor={'bisque'}
          >
            <Box
              position={'absolute'}
              top={0}
              left={0}
              w={280}
              shadow={'md'}
              borderRadius={'3xl'}>
              <Image
                loading="lazy"
                alt={'TRIP TODO 예약 목록 화면'}
                src={'/static/reservation-main.png'}
              />
              <Box
                position={'absolute'}
                top={0}
                w={280}
                h={'100%'}
                borderRadius={'3xl'}
                bgGradient="to-b"
                gradientFrom="transparent"
                gradientTo="rgba(255, 255, 255, 0.8)"
              />
            </Box>
            <Image
              loading="lazy"
              alt={'항공사 모바일 탑승권'}
              position={'absolute'}
              top={120}
              left={180}
              w={36}
              src={'/static/reservation-flightTicket.png'}
              shadow={'md'}
              borderRadius={'3xl'}
            />
            <Image
              loading="lazy"
              alt={'Visit Japan'}
              position={'absolute'}
              top={300}
              left={20}
              w={220}
              src={'/static/reservation-qr-gray.png'}
              shadow={'md'}
              borderRadius={'3xl'}
            />
          </Box>
        }
      />
      <TicketFeatureSection />
      <LandingPageSection
        title={
          <>
            일일이 옮겨 적을 필요 없이
            <br />
            간편하게 예약 관리하기
          </>
        }
        body={
          <>
            <Text
              hideFrom={'md'}
              fontSize={'inherit'}
              fontWeight={'inherit'}
              as={'span'}>
              화면 캡쳐 한번이면 끝!
              <br />
              TRIP TODO가 화면을 읽어 <br />
              내역을 자동으로 작성하고 관리해드려요
            </Text>
            <Text
              hideBelow={'md'}
              fontSize={'inherit'}
              fontWeight={'inherit'}
              as={'span'}>
              화면 캡쳐 한번이면 끝!
              <br />
              TRIP TODO가 화면을 읽어 내역을 자동으로 작성하고 관리해드려요
            </Text>
          </>
        }
        image={
          <Box
            position={'relative'}
            // w={'100%'}
            w={320}
            h={440}
            // backgroundColor={'bisque'}
          >
            <Box
              position={'absolute'}
              top={0}
              left={0}
              w={240}
              h={360}
              overflow={'hidden'}
              shadow={'md'}
              borderRadius={'3xl'}>
              <Image
                loading="lazy"
                alt={'아고다 숙소 예약 화면 캡쳐'}
                src={'/static/imageAnalysis-agoda.png'}
                mt={-24}
              />
              <Box
                position={'absolute'}
                top={0}
                w={280}
                h={'100%'}
                borderRadius={'3xl'}
                bgGradient="to-b"
                gradientFrom="transparent"
                gradientTo="rgba(255, 255, 255, 0.8)"
              />
            </Box>
            <Image
              loading="lazy"
              alt={'TRIP TODO 숙소 예약 내역'}
              position={'absolute'}
              top={120}
              left={24}
              w={56}
              src={'/static/imageAnalysis-result.png'}
              shadow={'md'}
              borderRadius={'3xl'}
            />
          </Box>
        }
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

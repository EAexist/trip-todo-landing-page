'use client'

import {
    Box,
    Card,
    Heading,
    SimpleGrid,
    Stack,
    Text
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { useColorModeValue } from '../ui/color-mode'
import { Section } from '../Section'

interface FeatureCardProps {
    title: string
    body: string
    icon: ReactNode
}

function FeatureCard(props: FeatureCardProps) {
    const { title, body, icon } = props
    return (
        <Card.Root width={72} variant="elevated" key={title}>
            <Card.Body textAlign={"center"} px={{ base: 8, md: 8 }} py={{ base: 6, md: 6 }} gap={{ base: 2, md: 2 }} justifyContent={"flex-start"}>
                <Box
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
                <Card.Title mb="2" as="div"><Heading as="h3">{title}</Heading></Card.Title>
                <Card.Description fontSize={"sm"} fontWeight={"regular"} textAlign={"center"} >
                    {body}
                </Card.Description>
            </Card.Body>
        </Card.Root>
    )
}

export default function FeatureSummarySection() {
    const TODOLIST_FEATURE_ITEMS: FeatureCardProps[] = [{
        title: "숙소, 항공권 예약",
        body: "날짜별 숙소 예약, 항공권 예약과 체크인, 여행에서 사용할 각종 티켓 예약까지 미리 준비하고 진행 상황을 체크해요",
        icon: <>ticket</>
    }, {
        title: "해외여행 준비",
        body: "환전, 로밍과 입국수속을 미리 준비하고 현지에서는 홀가분하게 여행을 시작해요",
        icon: <>ticket</>
    }, {
        title: "짐 챙기기",
        body: "꼭 입고 싶었던 옷, 에어팟, 해외여행 필수품 돼지코 어댑터까지, 빼먹는 짐이 없는지 꼼꼼하게 체크하고 편안한 마음으로 출발해요",
        icon: <>ticket</>
    }]
    return (
        <Section pt={{ base: 10, md: 10 }}>
            <Stack gap={{ base: 4, md: 4 }} maxWidth={"7xl"} width={"100%"}>
                <Stack textAlign={"center"}>
                    <Heading as="h2" textAlign={"center"}>
                        여행을 위한 투두리스트
                    </Heading>
                    <Text>
                        여행 전날, 여행 첫날 당황하는 일 없도록 <br />
                        꼼꼼하게 할 일을 챙겨드려요
                    </Text>
                </Stack>
                <Stack direction={{ base: 'row', lg: 'row' }} gap={{ base: 'auto', lg: 'auto' }} px={{ base: 36, md: 36 }} py={{ base: 2, md: 2 }} justifyContent={{ base: "space-between", md: "space-between" }}>
                    {TODOLIST_FEATURE_ITEMS.map((item) => (
                        <FeatureCard title={item.title} body={item.body} icon={item.icon} />
                    ))}
                </Stack>
            </Stack>
        </Section>
    )
}
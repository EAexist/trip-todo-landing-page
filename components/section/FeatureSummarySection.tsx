'use client'

import {
    Box,
    Card,
    Flex,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react'
import { Earth, LucideProps, Luggage, Ticket } from "lucide-react"
import { FC } from 'react'
import { Section } from '../Section'

interface FeatureCardProps {
    title: string
    body: string
    renderIcon: FC<LucideProps>
}

function FeatureCard(props: FeatureCardProps) {
    const { title, body } = props
    return (
        <Card.Root w={{ base: '100%', md: 56, lg: 72 }} maxW={{ base: 320 }} variant="elevated" key={title}>
            <Card.Body textAlign={"center"} px={{ base: 6, md: 8 }} py={{ base: 3, md: 6 }} gap={{ base: 2, md: 2 }} justifyContent={"flex-start"}>
                <Flex justify={'center'}>
                    <Box w={{ base: 12, md: 16 }} h={{ base: 12, md: 16 }} position={'relative'}>
                        <Box zIndex={1} position='absolute'><props.renderIcon size={48} strokeWidth={1} /></Box>
                        <Box zIndex={0} position='absolute' as='span' width={12} height={12} borderRadius={'12px 4px 20px 4px'} backgroundColor={'brand.50'} top={2} left={4} />
                    </Box>
                </Flex>
                <Card.Title mb="2" as="div"><Heading as="h3" fontSize={{ base: 17, md: 24, lg: 28 }} >{title}</Heading></Card.Title>
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
        body: "날짜별 숙소 예약, 항공권 예약과 체크인, 여행에서 사용할 각종 티켓 예약까지 미리 준비하고 진행 상황을 체크해보세요",
        renderIcon: Ticket
    }, {
        title: "해외여행 준비",
        body: "환전, 로밍과 입국수속을 미리 준비하고 현지에서는 홀가분하게 여행을 시작해보세요",
        renderIcon: Earth
    }, {
        title: "짐 챙기기",
        body: "꼭 입고 싶었던 옷, 에어팟, 까먹기 쉬운 돼지코 어댑터까지 빼먹는 짐이 없는지 꼼꼼하게 체크하고 편안한 마음으로 출발해보세요",
        renderIcon: Luggage
    }]
    return (
        <Section py={{ base: 10, md: 12 }}>
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
                <Stack direction={{ base: 'column', lg: 'row' }} gap={{ base: 6, md: 'auto' }} py={{ base: 0, md: 2 }} px={{ base: 6, md: 0 }} alignItems={{ base: "center", md: "auto" }} justifyContent={{ base: "flex-start", md: "space-between" }}>
                    {TODOLIST_FEATURE_ITEMS.map((item) => (
                        <FeatureCard key={item.title} title={item.title} body={item.body} renderIcon={item.renderIcon} />
                    ))}
                </Stack>
            </Stack>
        </Section>
    )
}
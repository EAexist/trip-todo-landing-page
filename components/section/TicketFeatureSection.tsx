'use client'

import {
    Box,
    Heading,
    HStack,
    SimpleGrid,
    Stack,
    Text,
    VStack
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Section } from '../Section'

export interface FeatureItem {
    title: string
    body: string
    icon: ReactNode
}

export const TicketFeatureSection = () => {
    const RESERVATION_FEATURE_ITEMS: FeatureItem[] = [{
        title: "모바일 탑승권",
        body: "Flight Mobile Ticket",
        icon: <>ticket</>
    }, {
        title: "숙소 예약",
        body: "Accomodation",
        icon: <>ticket</>
    }, {
        title: "사전 입국심사",
        body: "Immigration",
        icon: <>ticket</>
    }, {
        title: "입장권",
        body: "Other Tickets",
        icon: <>ticket</>
    }]
    return (
        <Section backgroundColor={"neutral.silver"}>
            <Stack
                align={'center'}
                py={{ base: 16, md: 16 }}
                px={{ base: 36, md: 36 }}
                // gap={{ base: 8, md: 8 }}
                direction={{ base: 'column', md: 'row' }} maxWidth={"7xl"} width={"100%"} justify={"space-between"}>
                <Stack gap={{ base: 2, md: 2 }}>
                    <Heading as='h2'>
                        {"TRIP TODO에서 관리하는"}
                    </Heading>
                    <Heading as='h2' color={"brand.solid"}>
                        {"티켓 · 예약 내역"}
                    </Heading>
                    <Text>
                        {"더 다양한 예약을 관리할 수 있도록 준비중이에요"}
                    </Text>
                </Stack>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={10}>
                    {RESERVATION_FEATURE_ITEMS.map((item) => (
                        <HStack key={item.title} align={'center'}>
                            <Box color={'green.400'} px={2}>
                                <>{item.icon}</>
                            </Box>
                            <VStack align={'start'}>
                                <Heading as="h3">{item.title}</Heading>
                                <Text fontSize={"md"} fontWeight={"regular"}>{item.body}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Stack>
        </Section>
    )
}
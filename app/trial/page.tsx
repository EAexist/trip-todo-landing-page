import Emulator from "@/components/Emulator";
import { Section } from "@/components/Section";
import {
    Button,
    Flex,
    Heading,
    Stack
} from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";

export default async function Page() {

    return (
        <Section pb={{ base: "60px", md: "60px" }} height={{ base: "100vh", md: "100vh" }}>
            <Stack
                maxWidth={'7xl'}
                width={'100%'}
                align={'stretch'}
                justifyContent={'center'}
                py={{ base: 6, md: 6 }}
                pt={{ base: 18, md: "84px" }}
                gap={{ base: 12, md: 32 }}
                direction={{ base: 'row', md: 'row' }}
            >
                <Stack justifyContent={"center"} align={'center'} >
                    <Stack gap={{ base: 4, md: 4 }}>
                        <Heading as="h3" style={{ lineHeight: 1.5 }}>
                            TRIP TODO를<br />미리 체험해보세요
                        </Heading>
                        <Button asChild>
                            <a href={process.env.NEXT_PUBLIC_TRIP_TODO_WEB_APP_URL}>
                                전체 화면으로 보기 <ChevronRight />
                            </a>
                        </Button>
                    </Stack>
                </Stack>
                <Flex hideBelow={"md"} px={{ base: 0, md: 0 }} alignItems={"center"}>
                    <Emulator />
                </Flex>
            </Stack>
        </Section>
    )
}
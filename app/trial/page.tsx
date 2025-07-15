import {
    Box,
    BoxProps,
    Image
} from "@chakra-ui/react"
import { LandingPageSection } from "@/components/LandingPageSection"
export default async function Page() {
    return (
        <LandingPageSection title={<>티켓과 예약 내역이 필요할 때<br />간편하게 꺼내보기</>} body={<>인터넷 브라우저, 항공사 앱, 숙소 예약 앱, 종이 티켓에 담아다니던 예약 내역<br />이젠 한 곳에 모아 여행 중 클릭 한번으로 이용해보세요</>} image={<ImagePlaceHolder width={433} height={433} />} />

    )
}


const ImagePlaceHolder = (props: BoxProps) =>
    <Box
        position={'relative'}
        aspectRatio={1}
        rounded={'2xl'}
        boxShadow={'2xl'}
        width={'300'}
        overflow={'hidden'} {...props}>
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

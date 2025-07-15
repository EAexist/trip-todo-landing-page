import LandingPageFooter from "@/components/LandingPageFooter"
import NavBar from "@/components/NavBar"
import {
    Container
} from "@chakra-ui/react"
import localFont from 'next/font/local'
import Provider from "./provider"

const pretendardVariable = localFont({
    src: './font/PretendardVariable.woff2',
    variable: "--font-pretendard-variable"
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className={pretendardVariable.className} suppressHydrationWarning>
            <head />
            <body>
                <Provider>
                    <Container px={0} py={0} maxWidth={'full'}>
                        <NavBar />
                        {children}
                        <LandingPageFooter />
                        {/* <Box pos="absolute" top="4" right="4">
                            <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
                                <ColorModeToggle />
                            </ClientOnly>
                        </Box> */}
                    </Container>
                </Provider>
            </body>
        </html>
    )
}

import LandingPageFooter from "@/components/LandingPageFooter"
import NavBar from "@/components/NavBar"
import {
    Box,
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
                    <Container px={0} py={0} >
                        <NavBar />
                        <Box h={10} />
                        {children}
                        <LandingPageFooter />
                    </Container>
                </Provider>
            </body>
        </html>
    )
}

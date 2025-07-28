import LandingPageFooter from '@/components/LandingPageFooter'
import NavBar from '@/components/NavBar'
import {Box, Container} from '@chakra-ui/react'
import localFont from 'next/font/local'
import Provider from './provider'

const pretendardVariable = localFont({
  src: './font/PretendardVariable.woff2',
  variable: '--font-pretendard-variable',
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="ko"
      className={pretendardVariable.className}
      suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/static/mockup-todolist.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
      </head>
      <body>
        <Provider>
          <Container px={0} py={0} maxW={'none'}>
            <NavBar />
            {/* <Box h={{ base: 12, md: 15 }} /> */}
            {children}
            <LandingPageFooter />
          </Container>
        </Provider>
      </body>
    </html>
  )
}

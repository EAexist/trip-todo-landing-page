import LandingPageFooter from '@/components/LandingPageFooter'
// import NavBar from '@/components/NavBar'
import {Box, Container} from '@chakra-ui/react'
import localFont from 'next/font/local'
// import Provider from './provider'
import dynamic from 'next/dynamic'

const NavBar = dynamic(() => import('@/components/NavBar'))
const Provider = dynamic(() => import('./provider'))

// const pretendardVariable = localFont({
//   src: './font/PretendardVariable.woff2',
//   variable: '--font-pretendard-variable',
//   fallback: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     'system-ui',
//     'Roboto',
//     'Helvetica Neue',
//     'Segoe UI',
//     'Apple SD Gothic Neo',
//     'Noto Sans KR',
//     'Malgun Gothic',
//     'Apple Color Emoji',
//     'Segoe UI Emoji',
//     'Segoe UI Symbol',
//     'sans-serif',
//   ],
//   display: 'fallback',
// })
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="ko"
      //   className={pretendardVariable.className}
      suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          type="image/webp"
          href="/static/mockup-todolist.webp"
        />
        {/* <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        /> */}
        <link
          rel="preload"
          fetchPriority="low"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          //   media="print"
          id="font-pretendard-variable"
        />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.getElementById("font-pretendard-variable").rel="stylesheet";`,
          }}
        />
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

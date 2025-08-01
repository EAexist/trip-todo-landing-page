import type {AppProps} from 'next/app'
import {Provider} from '../components/ui/provider'
import {Container} from '@chakra-ui/react'
import LandingPageFooter from '@/components/LandingPageFooter'
import NavBar from '@/components/NavBar'
import Head from 'next/head'

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Trip Todo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider>
        <Container px={0} py={0} maxW={'none'}>
          <NavBar />
          <Component {...pageProps} />
          <LandingPageFooter />
        </Container>
      </Provider>
    </>
  )
}

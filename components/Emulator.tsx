'use client'

import {Flex} from '@chakra-ui/react'
import {useEffect, useRef, useState} from 'react'
import {IPhoneMockup} from 'react-device-mockup'
import AppIframe from './AppIframe'

// const AppIframe = dynamic(
//     () => import('./AppIframe'),
//     { ssr: false }
// );

export default function Emulator() {
  const divRef = useRef<HTMLDivElement>(null)
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      if (entries[0]) {
        console.log(entries[0].contentRect.height)
        console.log((entries[0].contentRect.height - 20) * 0.46)
        setScreenWidth((entries[0].contentRect.height - 20) * 0.46)
      }
    })

    if (divRef.current) {
      observer.observe(divRef.current)
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current)
      }
      observer.disconnect() // Disconnect the observer
    }
  }, [])

  return (
    // breakpoint === "md" ?
    <Flex ref={divRef} maxH={900} minW={350} height={'100%'}>
      <IPhoneMockup
        screenWidth={screenWidth}
        screenType={'notch'}
        hideNavBar={true}
        hideStatusBar={true}>
        <AppIframe />
      </IPhoneMockup>
    </Flex>
    // : <></>
  )
}

'use client'

import {Image, ImageProps, Stack, Text, TextProps} from '@chakra-ui/react'
import {useEffect, useState} from 'react'

export const LazyImage = (props?: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return isLoaded && <Image {...props} />
}

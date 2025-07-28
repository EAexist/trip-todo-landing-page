import {Image, Stack, Text, TextProps} from '@chakra-ui/react'

export const Logo = (props?: TextProps) => {
  return (
    <Stack direction="row" align="center" as="span">
      <Image
        src="/static/app/logo.png"
        alt="trip todo app logo"
        width={8}
        height={8}
      />
      <Text
        color="white"
        fontWeight={'bold'}
        fontFamily={'Roboto'}
        fontSize={'lg'}
        letterSpacing={-1}
        {...props}>
        TRIP TODO
      </Text>
    </Stack>
  )
}

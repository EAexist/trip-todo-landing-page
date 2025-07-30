'use client'

import {useBreakpointValue} from '@chakra-ui/react'
import {LucideProps} from 'lucide-react'
import {DynamicIcon, IconName} from 'lucide-react/dynamic'
import {FC} from 'react'

export interface IconProps extends LucideProps {
  name: IconName
}

export const Icon: FC<IconProps> = props => {
  const iconSize = useBreakpointValue({base: 32, md: 48})

  return <DynamicIcon size={iconSize} {...props} />
}

import React from 'react'
import { Image, Stack, Text } from '@chakra-ui/react'

type TravelTypeProps = {
  name: string
  icon: string
}

export const TravelType: React.FC<TravelTypeProps> = ({ name, icon }) => (
  <Stack spacing="4" align="center">
    <Image src={icon} width="85px" />

    <Text fontWeight="semibold">{name}</Text>
  </Stack>
)

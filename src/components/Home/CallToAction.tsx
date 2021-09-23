import React from 'react'
import { Text, Stack } from '@chakra-ui/react'

export const CallToAction = () => (
  <Stack
    spacing="2"
    fontWeight="medium"
    fontSize={['2xl', null, '4xl']}
    align="center"
    textAlign="center"
  >
    <Text>Vamos nessa?</Text>
    <Text>Então escolha seu continente</Text>
  </Stack>
)

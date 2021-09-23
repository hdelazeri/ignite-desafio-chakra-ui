import React from 'react'
import { Flex, Heading, Image, Stack } from '@chakra-ui/react'

export const Banner = () => (
  <Flex
    px="40"
    py="8"
    justify="space-between"
    align="center"
    bgImg='url("/images/background.svg")'
    bgSize="cover"
  >
    <Stack color="gray.50" spacing="8">
      <Heading as="h2" size="2xl" fontWeight="medium">
        5 Continentes, infinitas possibilidades.
      </Heading>

      <Heading as="h3" size="lg" fontWeight="normal">
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Heading>
    </Stack>

    <Image
      src="/images/airplane.svg"
      transform="rotate(3deg) translateY(60px)"
    />
  </Flex>
)

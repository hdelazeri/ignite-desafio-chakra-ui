import React from 'react'
import { Flex, Image } from '@chakra-ui/react'

export const Header = () => (
  <Flex as="h1" py="5" justify="center" align="center">
    <Image src="/images/logo.svg" alt="WorldTrip" />
  </Flex>
)

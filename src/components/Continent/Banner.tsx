import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

type BannerProps = {
  name: string
  image?: string
}

export const Banner: React.FC<BannerProps> = ({ name, image }) => (
  <Flex
    align="end"
    justify="start"
    px="40"
    py="20"
    bg={`url('${image}')`}
    bgSize="cover"
    bgPos="center"
    h="500px"
  >
    <Heading color="gray.50" fontWeight="semibold" size="2xl">
      {name}
    </Heading>
  </Flex>
)

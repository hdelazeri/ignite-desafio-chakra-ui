import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'

type ContinentSlideProps = {
  name: string
  shortDescription: string
  backgroundImg: string
}

export const ContinentSlide: React.FC<ContinentSlideProps> = ({
  name,
  shortDescription,
  backgroundImg
}) => (
  <Flex
    direction="column"
    justify="center"
    align="center"
    rounded="16"
    bg={`url(${backgroundImg})`}
    bgPos="center"
    bgSize="cover"
    h="100%"
    w="100%"
  >
    <Heading color="gray.50" fontSize="5xl">
      {name}
    </Heading>

    <Text color="gray.200" fontWeight="bold" fontSize="4xl">
      {shortDescription}
    </Text>
  </Flex>
)

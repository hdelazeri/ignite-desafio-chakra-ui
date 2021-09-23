import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'

type City = {
  id: number
  name: string
  image: string
  country: string
  'country-code': string
}

type CitiesProps = {
  cities: City[]
}

export const Cities: React.FC<CitiesProps> = ({ cities }) => (
  <Box px={['4', null, '40']}>
    <Heading mb="6">Cidades +100</Heading>

    <SimpleGrid gap="4" minChildWidth="300px">
      {cities.map(city => (
        <Flex
          rounded="4"
          key={city.id}
          direction="column"
          align="center"
          justify="center"
          maxWidth="400px"
          border="1px"
          borderColor="yellow.400"
        >
          <Image
            src={city.image}
            boxSize="100%"
            maxH="250px"
            objectFit="cover"
            roundedTop="4"
          />

          <Flex
            direction="row"
            align="center"
            justify="space-between"
            w="100%"
            p="4"
          >
            <Stack spacing="2">
              <Text fontWeight="semibold">{city.name}</Text>
              <Text fontWeight="medium">{city.country}</Text>
            </Stack>

            <Box
              rounded="full"
              bg={`url('https://www.countryflags.io/${city['country-code']}/flat/64.png')`}
              bgPos="center"
              w="40px"
              h="40px"
            />
          </Flex>
        </Flex>
      ))}
    </SimpleGrid>
  </Box>
)

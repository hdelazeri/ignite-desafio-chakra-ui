import React from 'react'
import { Grid, Stack, Text, Tooltip } from '@chakra-ui/react'
import { FiInfo } from 'react-icons/fi'

type InformationProps = {
  description: string
  countries: number
  languages: number
  cities: number
}

export const Information: React.FC<InformationProps> = ({
  description,
  countries,
  languages,
  cities
}) => (
  <Grid templateColumns="1fr 1fr" gap="8" px="40">
    <Text>{description}</Text>

    <Grid templateColumns="1fr 1fr 1fr" gap="4">
      <Stack align="center" justify="center">
        <Text fontSize="4xl" color="yellow.400" fontWeight="semibold">
          {countries}
        </Text>
        <Text fontSize="2xl" fontWeight="semibold">
          países
        </Text>
      </Stack>

      <Stack align="center" justify="center">
        <Text fontSize="4xl" color="yellow.400" fontWeight="semibold">
          {languages}
        </Text>
        <Text fontSize="2xl" fontWeight="semibold">
          idiomas
        </Text>
      </Stack>

      <Stack align="center" justify="center">
        <Text fontSize="4xl" color="yellow.400" fontWeight="semibold">
          {cities}
        </Text>
        <Text fontSize="2xl" fontWeight="semibold">
          cidades +100
          <Tooltip
            label="Cidades entre as 100 mais visitadas do mundo"
            hasArrow
            bg="gray.300"
            color="black"
          >
            <span>
              <FiInfo style={{ display: 'inline-block', marginLeft: '5px' }} />
            </span>
          </Tooltip>
        </Text>
      </Stack>
    </Grid>
  </Grid>
)

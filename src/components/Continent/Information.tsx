import React from 'react'
import {
  Grid,
  Stack,
  Text,
  Tooltip,
  useBreakpointValue
} from '@chakra-ui/react'
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
}) => {
  const tooltipVisible = useBreakpointValue({ base: false, lg: true })

  return (
    <Grid
      templateColumns={['1fr', null, '1fr 1fr']}
      gap="8"
      px={['4', null, '40']}
    >
      <Text>{description}</Text>

      <Grid templateColumns="1fr 1fr 1fr" gap="4">
        <Stack align={['start', null, 'center']} justify="center">
          <Text fontSize="2xl" color="yellow.400" fontWeight="semibold">
            {countries}
          </Text>
          <Text fontSize="lg" fontWeight={['normal', null, 'semibold']}>
            países
          </Text>
        </Stack>

        <Stack align={['start', null, 'center']} justify="center">
          <Text fontSize="2xl" color="yellow.400" fontWeight="semibold">
            {languages}
          </Text>
          <Text fontSize="lg" fontWeight={['normal', null, 'semibold']}>
            idiomas
          </Text>
        </Stack>

        <Stack align={['start', null, 'center']} justify="center">
          <Text fontSize="2xl" color="yellow.400" fontWeight="semibold">
            {cities}
          </Text>
          <Text fontSize="lg" fontWeight={['normal', null, 'semibold']}>
            cidades +100
            {tooltipVisible && (
              <Tooltip
                label="Cidades entre as 100 mais visitadas do mundo"
                hasArrow
                bg="gray.300"
                color="black"
              >
                <span>
                  <FiInfo
                    style={{ display: 'inline-block', marginLeft: '5px' }}
                  />
                </span>
              </Tooltip>
            )}
          </Text>
        </Stack>
      </Grid>
    </Grid>
  )
}

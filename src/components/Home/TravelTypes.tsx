import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import { TravelType } from './TravelType'

export const TravelTypes = () => (
  <SimpleGrid spacing="4" minChildWidth="150px" px="40">
    <TravelType name="vida noturna" icon="/images/cocktail.svg" />
    <TravelType name="praia" icon="/images/surf.svg" />
    <TravelType name="moderno" icon="/images/building.svg" />
    <TravelType name="clássico" icon="/images/museum.svg" />
    <TravelType name="e mais..." icon="/images/earth.svg" />
  </SimpleGrid>
)

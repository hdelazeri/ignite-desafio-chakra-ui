import React from 'react'
import {
  ListIcon,
  ListItem,
  SimpleGrid,
  UnorderedList,
  useBreakpointValue
} from '@chakra-ui/react'
import { GoPrimitiveDot } from 'react-icons/go'

import { TravelType } from './TravelType'

export const TravelTypes = () => {
  const shouldApperAsList = useBreakpointValue({
    base: true,
    lg: false
  })

  return shouldApperAsList ? (
    <UnorderedList
      fontSize="xl"
      fontWeight="medium"
      display="flex"
      justifyContent="space-evenly"
      flexWrap="wrap"
      listStyleType="none"
    >
      <ListItem>
        <ListIcon as={GoPrimitiveDot} color="yellow.400" /> vida noturna
      </ListItem>
      <ListItem>
        <ListIcon as={GoPrimitiveDot} color="yellow.400" /> praia
      </ListItem>
      <ListItem>
        <ListIcon as={GoPrimitiveDot} color="yellow.400" /> moderno
      </ListItem>
      <ListItem>
        <ListIcon as={GoPrimitiveDot} color="yellow.400" /> clássico
      </ListItem>
      <ListItem>
        <ListIcon as={GoPrimitiveDot} color="yellow.400" /> e mais...
      </ListItem>
    </UnorderedList>
  ) : (
    <SimpleGrid spacing="4" minChildWidth="150px" px="40">
      <TravelType name="vida noturna" icon="/images/cocktail.svg" />
      <TravelType name="praia" icon="/images/surf.svg" />
      <TravelType name="moderno" icon="/images/building.svg" />
      <TravelType name="clássico" icon="/images/museum.svg" />
      <TravelType name="e mais..." icon="/images/earth.svg" />
    </SimpleGrid>
  )
}

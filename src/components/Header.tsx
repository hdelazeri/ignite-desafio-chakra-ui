import React from 'react'
import { useRouter } from 'next/router'
import { Flex, Grid, Image } from '@chakra-ui/react'

export const Header = () => {
  const router = useRouter()

  return (
    <Flex as="header" py="5" mx="40" justify="center" align="center">
      <Grid templateColumns="1fr 1fr 1fr" templateAreas="'back logo'" w="100%">
        {router.asPath !== '/' && (
          <Image
            src="/images/back.svg"
            alt="Voltar"
            cursor="pointer"
            onClick={() => router.back()}
            gridArea="back"
          />
        )}

        <Image
          src="/images/logo.svg"
          alt="WorldTrip"
          justifySelf="center"
          gridArea="logo"
        />
      </Grid>
    </Flex>
  )
}

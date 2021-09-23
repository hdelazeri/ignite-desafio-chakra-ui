import React from 'react'
import Head from 'next/head'
import { Center, Divider, Stack } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Banner } from '../components/Home/Banner'
import { TravelTypes } from '../components/Home/TravelTypes'
import { CallToAction } from '../components/Home/CallToAction'
import { Slider } from '../components/Home/Slider'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Header />
      <Banner />

      <Stack spacing={['4', null, '12']} py={['4', null, '24']}>
        <TravelTypes />

        <Center>
          <Divider w="90px" borderColor="gray.600" />
        </Center>

        <CallToAction />

        <Slider />
      </Stack>
    </>
  )
}

export default Home

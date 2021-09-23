import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Stack } from '@chakra-ui/react'

import { Header } from '../../components/Header'

import { api } from '../../services/api'
import { Banner } from '../../components/Continent/Banner'
import { Information } from '../../components/Continent/Information'
import { Cities } from '../../components/Continent/Cities'

type Continent = {
  name: string
  'banner-image': string
  description: string
  countries: number
  languages: number
}

type City = {
  id: number
  name: string
  image: string
  country: string
  'country-code': string
}

const ContinentHome = () => {
  const router = useRouter()
  const { slug } = router.query

  const [continent, setContinent] = useState<Continent>({} as Continent)
  const [cities, setCities] = useState<City[]>([])

  useEffect(() => {
    async function loadContinent() {
      const response = await api.get(`/continent/${slug}?include=cities`)
      setContinent(response.data.data.attributes)
      setCities(response.data.included.map(city => city.attributes))
    }

    if (slug) loadContinent()
  }, [slug])

  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Header />
      <Banner name={continent?.name} image={continent['banner-image']} />

      <Stack spacing="16" py="20">
        <Information
          description={continent?.description}
          countries={continent?.countries}
          languages={continent?.languages}
          cities={cities.length}
        />

        <Cities cities={cities} />
      </Stack>
    </>
  )
}

export default ContinentHome

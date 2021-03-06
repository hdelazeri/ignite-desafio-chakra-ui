import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ContinentSlide } from './Slide'

import { api } from '../../services/api'

type Continent = {
  id: number
  name: string
  'short-description': string
  'slide-image': string
  slug: string
}

export const Slider = () => {
  const [continents, setContinents] = useState<Continent[]>([])

  useEffect(() => {
    async function fetchContinents() {
      const response = await api.get('/continents')
      setContinents(response.data.data.map(continent => continent.attributes))
    }

    fetchContinents()
  }, [])

  return (
    <Box px={['0', null, '40']} h={['250px', null, '500px']}>
      {continents.length > 0 && (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
        >
          {continents.map(continent => (
            <SwiperSlide key={continent.id}>
              <ContinentSlide
                name={continent.name}
                shortDescription={continent['short-description']}
                backgroundImg={continent['slide-image']}
                slug={continent.slug}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  )
}

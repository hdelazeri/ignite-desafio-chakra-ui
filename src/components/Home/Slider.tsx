import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ContinentSlide } from './Slide'

import { api } from '../../services/api'

type Continent = {
  id: number
  name: string
  shortDescription: string
  slideImage: string
}

export const Slider = () => {
  const [continents, setContinents] = useState<Continent[]>([])

  useEffect(() => {
    async function fetchContinents() {
      const response = await api.get('/continents')
      setContinents(response.data.continents)
    }

    fetchContinents()
  }, [])

  return (
    <Box px="40" h="500px">
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
                shortDescription={continent.shortDescription}
                backgroundImg={continent.slideImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  )
}

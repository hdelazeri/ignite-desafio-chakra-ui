import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import '../services/fakeServer'

import { theme } from '../styles/theme'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import '../styles/swiper.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

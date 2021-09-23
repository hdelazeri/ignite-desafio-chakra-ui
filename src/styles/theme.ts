import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: 'Poppins',
    heading: 'Poppins'
  },
  colors: {
    yellow: {
      '400': '#FFBA08'
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600'
      }
    }
  }
})

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'


import '@fontsource/poppins/900.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/100.css'

import Fonts from './Fonts'

import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  "lg2": '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
    Nevrada: `'Nevrada'`,
    Highlight: `'Highlight'`,
  },
})

export default theme

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}> <Fonts />
    <App />
    </ChakraProvider>
  </React.StrictMode>
)



import { Provider } from 'next-auth/client'
import { useEffect, useState } from 'react';

import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react'

import Spinner from './components/Spinner/Spinner';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setIsLoading(false)
  }, [])
  return (
    <>
      {isLoading ? (
        <Spinner/>
      ):(
        <ThemeProvider theme={theme}>
          <Provider session={pageProps.session}>
            <CSSReset/>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      )}
    </>
  )
}

export default MyApp

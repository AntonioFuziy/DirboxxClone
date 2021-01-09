import { Provider } from 'next-auth/client'
import { useEffect, useState } from 'react';

import { ChakraProvider } from "@chakra-ui/react"

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
        <ChakraProvider>
          <Provider session={pageProps.session}>
            <Component {...pageProps} />
          </Provider>
        </ChakraProvider>
      )}
    </>
  )
}

export default MyApp

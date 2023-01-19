import React from 'react'
import { Header } from '../components'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp

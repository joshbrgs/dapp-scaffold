import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DAppProvider } from '@usedapp/core'
import dappConfig from '../lib/dappConfig'

function MyApp({ Component, pageProps }: AppProps) {
  return <DAppProvider config={dappConfig}><Component {...pageProps} /></DAppProvider>
}

export default MyApp

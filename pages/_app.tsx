import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    // higher order component
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
      <div><Toaster /></div>
        <div className="h-screen overflow-y-scroll bg-slate-200">
          {/* header is here because we want it to appear on every page we create */}
          <Header />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp

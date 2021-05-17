import { AppProps } from 'next/app'
import '@assets/styles/index.css'
import 'reflect-metadata'
import { GraphQLClient } from 'graphql-request'
import { Client } from '@client/Client'
import { API_URL } from '@config/api'
import { AppClientProvider } from '@client/useAppClient'
import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import { AppLayout } from '@components/AppLayout/AppLayout'

const clientInstance = new GraphQLClient(API_URL!, { headers: {} })
const queryClient = new QueryClient()
const client = new Client(clientInstance)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppClientProvider client={client}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AppClientProvider>
    </QueryClientProvider>
  )
}

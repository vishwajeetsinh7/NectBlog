import '@/styles/globals.css'
import Layout from '@/components/layout/layout'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <meta name="viewport" content="width=device-width, intial-scale=1"/>
      <Component {...pageProps} />
    </Layout>
  )
}

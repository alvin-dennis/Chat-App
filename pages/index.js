import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ChatterHub</title>
        <meta name="description" content="A chatting application" />
        <link rel="icon" href="/chat" />
      </Head>
      
      <Box h="100vh">
        <Sidebar />
      </Box>
      
    </div>
  )
}

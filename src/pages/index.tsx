import Head from 'next/head'
import HomeCompound from '@/compounds/HomeCompound'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tripo Games</title>
        <meta name='description' content='Tripo Games' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeCompound />
    </>
  )
}

import Head from 'next/head'

import ImageSlider from '../components/ImageSlider'
import Cooperation from '../components/Cooperation'
import BannerAbout from '@/components/BannerAbout'
import Product from '@/components/Product'


export default function Home() {

  return (
    <>
      <Head>
        <title>Innowacyjne Technologie Paszowe</title>
        <meta name="description" content="Pasze i Zboża dla zwięrząt hodowlanych i domowych" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     <main>
      <ImageSlider />
      <BannerAbout />


      <Product />
     </main>
    </>
  )
}

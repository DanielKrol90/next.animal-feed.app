import Head from 'next/head'
import ImageSlider from '../components/ImageSlider'

import { images } from '../constants';



export default function Home() {
  const slides = [
    { id: 1, image: images.Poultry_c, title: 'Poultry' },
    { id: 2, image: images.Cow_c, title: 'Cow' },
    { id: 3, image: images.Dogocat_c, title: 'Dogocat' },
    { id: 4, image: images.Pigeon2_c, title: 'Pigeon' },
    { id: 5, image: images.Chicken2_c, title: 'Chicken' },
  ]

  return (
    <>
      <Head>
        <title>Innowacyjne Technologie Paszowe</title>
        <meta name="description" content="Pasze i Zboża dla zwięrząt hodowlanych i domowych" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     <main>
      <ImageSlider slides={slides} />
     </main>
    </>
  )
}

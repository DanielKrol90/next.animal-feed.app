import { useState } from 'react';
import Image from 'next/image';

import { images } from '../constants';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, image: images.Poultry_c, title: 'Poultry' },
    { id: 2, image: images.Cow_c, title: 'Cow' },
    { id: 3, image: images.Dogocat_c, title: 'Dogocat' },
    { id: 4, image: images.Pigeon2_c, title: 'Pigeon' },
    { id: 5, image: images.Chicken2_c, title: 'Chicken' },
  ]


  return (
    <div className="imageSlider__container">
      <div className="imageSlider__item">
        <Image src={slides[currentIndex].image} alt={slides[currentIndex].title} />
      </div>
    </div>
  )
}

export default ImageSlider;
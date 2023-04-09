import { useState } from 'react';

const ImageSlider = ({slides}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <div style={{ backgroundImage: `url(${slides[currentIndex]})`}}>

      </div>
    </div>
  )
}

export default ImageSlider;
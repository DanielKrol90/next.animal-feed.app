import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { CiDroplet } from "react-icons/ci";
import { images } from "../constants";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3000;
  
  const slides = [
    { id: 1, image: images.Poultry_c, title: "Poultry" },
    { id: 2, image: images.Cow_c, title: "Cow" },
    { id: 3, image: images.Dogocat_c, title: "Dogocat" },
    { id: 4, image: images.Pigeon2_c, title: "Pigeon" },
    { id: 5, image: images.Rabbits_c, title: "Rabbit" },
    { id: 6, image: images.Chicks_c, title: "Chicks" },
  ];
  const length = slides.length;
  

  const goToNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
      setCurrentIndex((prevIndex) =>
          prevIndex === length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  });



  return (
    <div className="imageSlider__container">
      <div
        className="imageSlider__leftArrow"
        onClick={goToPrevious}
      >
        <BiLeftArrow size={50} />
      </div>
      <Image
        className="imageSlider__item"
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
      />
      <div
        className="imageSlider__rightArrow"
        onClick={goToNext}
      >
        <BiRightArrow size={50} />
      </div>
      <div className="imageSlider__dot-container">
        {slides.map((slide, index) => {
          return (
            <div
              key={slide.id}
              className={
                index === currentIndex
                  ? "imageSlider__dot active"
                  : "imageSlider__dot"
              }
              onClick={() => setCurrentIndex(index)}
            >
              <CiDroplet size={30} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;

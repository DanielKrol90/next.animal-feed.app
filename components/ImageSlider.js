import { useState } from "react";
import Image from "next/image";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { CiDroplet } from "react-icons/ci";
import { images } from "../constants";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, image: images.Poultry_c, title: "Poultry" },
    { id: 2, image: images.Cow_c, title: "Cow" },
    { id: 3, image: images.Dogocat_c, title: "Dogocat" },
    { id: 4, image: images.Pigeon2_c, title: "Pigeon" },
    { id: 5, image: images.Rabbits_c, title: "Rabbit" },
  ];
  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

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
        ;
      </div>
    </div>
  );
};

export default ImageSlider;

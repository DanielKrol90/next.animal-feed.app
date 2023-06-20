import { useState, useEffect } from "react";
import Image from "next/image";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "../constants/data";

function Cooperation() {
  const [company, setCompany] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = company.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, company]);

  // autoslide, clearInterval = cleanup function
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (

    <section className="review-container">
      <div className="title">
        <h2>
          <span>WSPÓŁPRACUJEMY Z</span>
        </h2>
      </div>
      <div className="section-center">
        {company.map((person, personIndex) => {
          const { id, image, name, title } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === company.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <>
              <article key={id} className={position}>
                <Image src={image} alt={name} className="person-img" width={500} height={500}/>
                <h4>{name}</h4>
                <p className="title">{title}</p>
              </article>
            </>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Cooperation;
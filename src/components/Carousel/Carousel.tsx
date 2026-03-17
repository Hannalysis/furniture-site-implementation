import React, { useState } from "react";
import classes from "./Carousel.module.css"

import { BsChevronRight } from "react-icons/bs";

type CarouselProps = {
  images: string[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <div className={classes.carouselContainer}>
      <div
        className={classes.carouselTrack}
        style={{
          transform: `translateX(-${index * 70}%)`,
        }}
      >
        {images.map((src, i) => (
          <div className={classes.CarouselItem} key={i}>
            <img src={src} alt={`slide-${i}`} />
          </div>
        ))}
      </div>

      <button className={classes.buttonCarousel} onClick={handleNext}>
        <BsChevronRight className={classes.reactIcon}/>
      </button>
    </div>
  );
};

export default Carousel;
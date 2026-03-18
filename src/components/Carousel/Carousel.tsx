import React, { useState } from "react";
import classes from "./Carousel.module.css"

import { BsChevronRight } from "react-icons/bs";

type CarouselProps = {
  images: string[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };


  return (
    <div className={classes.carouselContainer}>
      <div
        className={classes.carouselTrack}
        style={{ "--index": index, } as React.CSSProperties}
      >
        {images.map((src, i) => (
          <div className={classes.CarouselItem} key={i}>
            <img src={src} alt={`room-${i + 1}`} 
              onLoad={() => setImageLoaded(true)}
              className={`${classes.projectImage} ${imageLoaded ? classes.loaded : ''}`}/>
          </div>
        ))}
      </div>

      <button className={classes.buttonCarousel} onClick={handleNext}>
        <BsChevronRight className={classes.reactIcon}/>
      </button>

      <div className={classes.carouselIndicators}>
        {images.map((_, i) => (
          <button
            key={i}
           className={`${classes.indicator} ${i === index ? classes.activeIndicator : ""}`}
            onClick={() => {
              setImageLoaded(false);
              setIndex(i);
            }}
            aria-label={`Go to room image ${index + 1}`}
          >
            <div className={`${classes.innerIndicator} ${i === index ? classes.activeInnerIndicator : ""}`}></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
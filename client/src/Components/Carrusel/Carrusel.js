import React, { useState, useEffect } from "react";
import "./Slider.css";
import images from "./Carruselimg.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carrusel() {
  const [slideIndex, setSlideIndex] = useState(1);
  function nextSlide() {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  }

  useEffect(() => {
    setTimeout(nextSlide, 5000);// eslint-disable-next-line
  }, [slideIndex]);

  return (
    <div className="container-slider">
      {images.map((obj, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.image} alt={obj.adress} />
          </div>
        );
      })}
    </div>
  );
}

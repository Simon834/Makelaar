import React, { useState, useEffect } from "react";
import "./Slider.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Carrusel() {
  const SLIDE_INFO = [
    {
      url: "http://www.inmobiliariaberrini.com.ar/wp-content/uploads/2021/08/1.0-10-525x328.jpg",
    },
    {
      url: "http://www.inmobiliariaberrini.com.ar/wp-content/uploads/2021/08/1.0-14-525x328.jpg",
    },
    {
      url: "http://www.inmobiliariaberrini.com.ar/wp-content/uploads/2021/08/1.0-13-525x328.jpg",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  function nextSlide() {
    if (slideIndex !== SLIDE_INFO.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === SLIDE_INFO.length) {
      setSlideIndex(1);
    }
  }

  useEffect(() => {
    setTimeout(nextSlide, 5000);
  }, [slideIndex]);
  return (
    <div className="container-slider">
      {SLIDE_INFO.map((obj, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.url} />
          </div>
        );
      })}
    </div>
  );
}

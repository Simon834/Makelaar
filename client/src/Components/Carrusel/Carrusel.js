import React from "react";
import { Carousel } from "react-responsive-carousel";
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

  return (
    <Carousel
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      centerMode={true}
      showThumbs={false}
      centerSlidePercentage={100}
    >
      {SLIDE_INFO.map((image) => (
        <div>
          <img src={image.url} alt="Not found" />
        </div>
      ))}
    </Carousel>
  );
}

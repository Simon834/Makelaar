import CarouselSlide from "./CarouselSlide";
import { useState } from "react";
export default function IndexCarrousel() {
  //necesito recibir imagenes
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

  //manejo el index (donde esta parado)
  const [index, setIndex] = useState(0);
  //con el estado le digo cual del array quiero
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;

  const onArrowClick = (direction) => {
    //si la direction es left reduce 1 al index
    const increment = direction === "left" ? -1 : 1;
    //para marcar un limite REVER
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div direction="left" onClick={() => onArrowClick("left")}>
        left
      </div>
      <CarouselSlide content={content} />
      <div direction="right" onClick={() => onArrowClick("right")}>
        right
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { carouselItems } from "../data";

export default function Carousel() {

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <div className="!flex !justify-center !items-center mt-4">
        {/* Play/Stop Button */}
        <button
          className="text-white text-2xl cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <FaPause/>  : <FaPlay size={17}/>}
        </button>
        {/* Dots */}
        <ul className="flex space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (index) => (
      <div
        style={{
          width: "14px",
          height: "14px",
          backgroundColor: index === currentSlide ? "#44D62C" : "#CCCCCC",
          borderRadius: "50%",
          transition: "background-color 0.3s ease",
        }}
      ></div>
    ),
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  

  useEffect(() => {
    const slickDots = document.querySelector(".slick-dots");
    if (slickDots) {
      slickDots.style.display = "flex";
      slickDots.style.justifyContent = "center";
      slickDots.style.alignItems = "center";
      slickDots.style.marginTop = "1rem";
      slickDots.style.gap = "1rem";
    }
  }, []);
  
  return (
    <div className="w-full">
      <Slider {...settings} ref={sliderRef}>
        {carouselItems.map((item, index) => (
          <div key={index} className="h-[480px] w-full mb-5 cursor-pointer">
            <img
              src={item.img}
              alt={item.alt}
            />
            <h3 className="text-center">{item.title}</h3>
            <h2 className="text-center text-2xl text-[#44D62C] mt-1">
              {item.subtitle}
            </h2>
          </div>
          
        ))}
      </Slider>

      {/*Custom Arrow*/}

      <button className="absolute right-4 top-1/3 transform -translate-y-1/3 text-white text-3xl z-10" onClick={()=>sliderRef.current.slickNext()}>
      <span><FaAngleRight/></span>
      </button>
      
      <button className="absolute left-4 top-1/3 transform -translate-y-1/3 text-white text-3xl z-10" onClick={()=>sliderRef.current.slickPrev()}>
      <span><FaAngleLeft/></span>
      </button>

    </div>
  );
}
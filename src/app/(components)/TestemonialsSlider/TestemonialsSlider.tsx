"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSlider() {
  // Custom previous arrow component
  const CustomPrevArrow: React.FC = (props) => {
    return (
      <button
        {...props}
        className="text-black bg-transparent border-none text-lg font-bold absolute top-1/4 -left-5 z-10 transform -translate-y-1/2"
      >
        <img src="/arrow-left.png" alt="arrow" />
      </button>
    );
  };

  // Custom next arrow component
  const CustomNextArrow: React.FC = (props) => {
    return (
      <button
        {...props}
        className="text-black bg-transparent border-none text-lg font-bold absolute top-1/4 -right-5 z-10 transform -translate-y-1/2"
      >
        <img src="/arrow-right.png" alt="arrow" />
      </button>
    );
  };

  return (
    <Slider
      dots={false}
      arrows={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      prevArrow={<CustomPrevArrow />} // Custom previous arrow component
      nextArrow={<CustomNextArrow />} // Custom next arrow component
    >
      <div className="container mx-auto flex flex-col items-center">
        <p className="font-normal max-w-screen-md mx-auto text-h-one text-center">
          Sara Jones's designs are both visually captivating and highly
          effective. She transformed our website, enhancing user engagement and
          conversions. Her attention to detail and creative approach are
          top-notch. Highly recommended!
        </p>
        <div className="flex gap-3 justify-center items-center py-9">
          <img src="/client.png" alt="client" />
          <p className="font-normal text-h-one text-center">
            <span className="text-h-one font-bold text-base">John Smith</span> /
            CEO of XYZ Company
          </p>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center">
        <p className="font-normal max-w-screen-md mx-auto text-h-one text-center">
          Sara Jones's designs are both visually captivating and highly
          effective. She transformed our website, enhancing user engagement and
          conversions. Her attention to detail and creative approach are
          top-notch. Highly recommended!
        </p>
        <div className="flex gap-3 justify-center items-center py-9">
          <img src="/client.png" alt="client" />
          <p className="font-normal text-h-one text-center">
            <span className="text-h-one font-bold text-base">John Smith</span> /
            CEO of XYZ Company
          </p>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center">
        <p className="font-normal max-w-screen-md mx-auto text-h-one text-center">
          Sara Jones's designs are both visually captivating and highly
          effective. She transformed our website, enhancing user engagement and
          conversions. Her attention to detail and creative approach are
          top-notch. Highly recommended!
        </p>
        <div className="flex gap-3 justify-center items-center py-9">
          <img src="/client.png" alt="client" />
          <p className="font-normal text-h-one text-center">
            <span className="text-h-one font-bold text-base">John Smith</span> /
            CEO of XYZ Company
          </p>
        </div>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
}

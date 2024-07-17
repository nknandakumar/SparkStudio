import React from "react";
import Slider from "react-slick";
import { testimonials } from "../constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomDot = ({ isActive }) => (
  <div
    className={`w-8 h-1 rounded-full transition-all duration-300 ease-in-out ${
      isActive ? "bg-gray-800 w-12" : "bg-gray-300"
    }`}
  >
    <div className={`h-full ${isActive ? "animate-dot-fill" : ""}`}></div>
  </div>
);

const CustomDots = (dots) => (
  <div className="flex justify-center items-center py-5 space-x-2">{dots}</div>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: CustomDots,
    customPaging: (i) => <CustomDot />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="mb-20">
      <h1 className="text-5xl font-sans text-center font-semibold mb-20">
        Testimonials
      </h1>
      <Slider {...settings}>
        {testimonials.map((item, i) => (
          <div key={i} className="px-2">
            <div className="card p-5 bg-slate-100 rounded-3xl border border-b-4 mb-10 space-y-6">
              <div className="flex justify-center items-center">
                <img
                  className="rounded-full w-[220px] h-[220px] object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <p className="text-base tracking-wide">{item.feedback}</p>
              <h2 className="text-xl font-semibold font-sans mb-4">
                {item.name}
                <br />
                <span className="text-base font-medium">{item.title}</span>
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;

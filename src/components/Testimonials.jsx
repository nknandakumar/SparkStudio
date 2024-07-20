import React from "react";
import Slider from "react-slick";
import { testimonials } from "../constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

  return (
    <section id="testimonials" className="mb-20 py-8 bg-slate-50 ">
      <h1 className="text-5xl font-sans text-center font-semibold mb-20">
        Testimonials
      </h1>
      <div className="px-4">
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
                <h2 className="text-xl font-semibold font-sans mb-4 underline cursor-pointer ">
                  {item.name}
                  <br />
                </h2>
                <span className="text-base font-thin  ">{item.title}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

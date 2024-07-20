import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css"; // Ensure this import includes your custom Tailwind CSS
import { Pagination } from "swiper/modules";
import { graphicDesignProjects } from "../constants";
import {ArrowUpRight } from "lucide-react"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  delay: 300,
});

const GraphicDesign = () => {
  return (
    <div className=" my-10">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is <= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is <= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is > 768px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {graphicDesignProjects.map((item, i) => (
          <SwiperSlide key={i} className="cursor-pointer">
            <div
              data-aos="zoom-out-up"
              data-aos-delay={i * 200}
              className="card p-5 bg-slate-100 rounded-3xl border border-b-4 mb-10 mx-4  cursor-grab "
            >
              <div className="relative overflow-hidden rounded-3xl h-[200px]">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out card-hover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <h1 className="text-sm font-sans text-blue my-4">{item.Type}</h1>
              <h2 className="text-xl font-semibold font-sans mb-4">
                {item.Name}
              </h2>
              <p className="text-base tracking-wide">{item.Description}</p>
              <p className="mt-5">
                <a
                  href={item.link}
                  className="text-blue font-semibold text-sm flex justify-start items-center cursor-pointer"
                >
                  View Project <ArrowUpRight />
                </a>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GraphicDesign;
// hover:border-b-4 hover:border-cyan-700
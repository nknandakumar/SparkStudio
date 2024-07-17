import HeroImg from "/assets/Hero.svg";
const Hero = () => {
  return (
    <section className=" my-4 mb-10 ">
      <div className="flex flex-wrap  ">
        <div className=" order-2  lg:order-none  w-full md:w-1/2 lg:px-4  space-y-6 ">
          <h1 className=" w-full text-5xl lg:text-7xl font-custom font-semibold  tracking-widest px-4 text-center  lg:text-start ">
            Unlock Your <br />
            Digital Potential
          </h1>
          <p className=" w-full text-2xl  font-custom px-4 tracking-wider mt-4 text-center lg:text-start  ">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including Web Design &
            Development, Graphic Designing, Video Editing and social media
            management.
          </p>
          <div className="flex justify-center items-center lg:justify-start ">
            <button className=" text-center  my-3 px-8 py-4 bg-black text-white rounded-xl  lg:text-xl  hover:bg-slate-50 hover:text-black transition-all border ">
              Start a Free Consultation
            </button>
          </div>
        </div>
        <div className=" order-1  pb-2 lg:order-none  w-full lg:w-1/2  ">
          <div className=" flex justify-center  ">
            <img
              className=" h-auto w-auto lg:w-[600px] lg:h-[600px] "
              src={HeroImg}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero

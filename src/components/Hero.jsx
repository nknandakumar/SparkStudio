import HeroImg from "/assets/Hero.svg";
import Socails from "./Socails";
const Hero = () => {
  return (
    <section id="home" className="mt-28 lg:mt-26 my-4 mb-10  ">
      <div className="flex flex-col lg:flex-row xl:flex-row items-center justify-center">
        <div className="lg:hidden flex flex-col justify-center items-center ">
          <p className=" uppercase font-bold text-indigo-500 text-xl md:text-2xl ">
            {" "}
            <span className="  text-black ">hello,</span> we are{" "}
          </p>
          <h1 className="  text-4xl md:text-6xl text-center  uppercase  ">
            {" "}
            <span className="font-bold bg-gradient-to-tr from-red-200 via-indigo-500 to-yellow-100 bg-clip-text text-transparent order-1 ">
              Spark
            </span>{" "}
            <span className="bg-gradient-to-tr  from-slate-900 via-slate-300 to-slate-900 bg-clip-text text-transparent  px-2 py-1 ">
              Studio
            </span>
          </h1>
          <p className="md:text-2xl">
            {" "}
            A <span className=" font-styly">Digital marketing Agency</span>
          </p>
        </div>

        <div className="w-full lg:w-1/2 xl:w-1/2 px-4 space-y-4 md:space-y-6 order-3 lg:order-none">
          <div className="space-y-2 hidden lg:flex lg:flex-col ">
            <p className="  text-start uppercase font-bold text-blue text-xl  ">
              {" "}
              <span className="  text-black ">hello,</span> we are{" "}
            </p>
            <h1 className="  lg:flex md:text-4xl lg:text-7xl xl:text-8xl lg:mb-1 uppercase  ">
              {" "}
              <span className="font-bold bg-gradient-to-tr from-slate-100 via-sky-700 to-gray-200 bg-clip-text text-transparent ">
                Spark {"  "}
              </span>
              <span className="  "> Studio</span>
            </h1>
            <p className=" text-2xl font-sans">
              {"    "}A{" "}
              <span className="  font-styly">Digital marketing Agency</span>
            </p>
          </div>

          <h1 className="text-5xl text-center lg:text-5xl xl:text-6xl font-custom font-semibold tracking-wider md:text-center lg:text-left xl:text-left mb-6 ">
            Ignite Your <br />
            Digital Growth
            <p className=" text-lg mt-2  tracking-tight md:tracking-widest ">
              Unlock Your Brand's Full Potential
            </p>
          </h1>

          <Socails />
          <div className="flex  justify-center   lg:justify-start xl:justify-start">
            <button className="text-center my-3 px-8 py-4 bg-black text-white rounded-xl lg:text-xl xl:text-xl hover:bg-slate-50 hover:text-black transition-all duration-300 border">
              Start a Free Consultation
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/2 px-4 order-2 lg:order-none">
          <img
            className="h-auto w-full lg:w-full xl:w-full"
            src={HeroImg}
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

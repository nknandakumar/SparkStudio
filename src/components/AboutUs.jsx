import { aboutUs } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  delay: 200,
});
const AboutUs = () => {
  return (
    <section id="aboutus" className="mb-20 lg:mb-20 mt-8 px-4">
      <h1
        data-aos="fade-up"
        className="text-5xl my-20 font-sans font-bold text-center"
      >
        About Us/Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20  mx-auto relative ">
        {aboutUs.map((about, index) => (
          <div
            data-aos="zoom-in-down"
            data-aos-delay={index * 100}
            key={index}
            className={`about-card flex flex-col p-6 justify-between items-center bg-slate-100 rounded-3xl shadow-md border border-b-4 border-black h-full ${about.order} sticky top-0  `}
          >
            <div className="w-48 h-48 mb-4 overflow-hidden rounded-full">
              <img
                className="w-full h-full object-cover object-center"
                src={about.image}
                alt={about.name}
              />
            </div>
            <h2 className="text-2xl font-sans font-semibold py-2 text-center">
              {about.name}
            </h2>
            <p className="text-base font-custom text-gray-600 py-2 text-center flex-grow">
              {about.skills}
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              {about.socials.map((social, socialIndex) => (
                <a
                  key={socialIndex}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <img
                    src={social.logo}
                    alt={social.platform}
                    className="h-8 w-8 rounded-full p-1 border "
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;

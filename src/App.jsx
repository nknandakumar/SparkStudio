import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Service from "./components/Service"
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const App = () => {
  return (
    <>
      <div className=" container mx-auto px-4  lg:px-10 bg-[#ffffff] ">
        <Navbar />
        <Hero />
        <Service />
        <Projects />
        <Testimonials />
        <AboutUs />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}
 
export default App

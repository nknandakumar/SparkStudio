import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Service from "./components/Service"
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
const App = () => {
  return (
    <>
      <div className=" container mx-auto px-4 lg:px-8 bg-[#ffffff] ">
        <Navbar />
        <Hero />
        <Service />
        <Projects />
        <Testimonials />
      </div>
    </>
  );
}
 
export default App

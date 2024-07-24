// App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data and images
    const loadResources = async () => {
      // Replace this with your actual data and image loading logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    loadResources();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4 lg:px-10 bg-[#fffdfd]">
      <Navbar />
      <Hero />
      <Service />
      <Projects />
      <Testimonials />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

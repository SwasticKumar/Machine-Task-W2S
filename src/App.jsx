import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import HeroBanner from "./components/heroBanner/HeroBanner";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="banner">
        <HeroSection />
        <HeroBanner />
        <Testimonials/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;

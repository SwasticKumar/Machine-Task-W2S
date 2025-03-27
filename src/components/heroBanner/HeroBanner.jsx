import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./HeroBanner.css"; // Import Bootstrap in your project
import draw from "../../assets/draw.png";
const HeroBanner = () => {
  return (
    <section className="mx-3 mt-5">
      <div className="container hero-container">
        <div className="row align-items-center flex-row-reverse row-style">
          {/* Image on Mobile (col-12) and Right on Desktop (col-md-6) */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <img src={draw} alt="Illustration" className="hero-img img-fluid" />
          </div>

          {/* Text on Mobile (col-12) and Left on Desktop (col-md-6) */}
          <div className="col-12 col-md-6">
            <h2 className="hero-title pb-4">
              Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
            </h2>
            <p className="hero-highlight mb-0">
              Vulputate et vulputate suspendisse natoque!
            </p>
            <p className="hero-text mb-4">
              Euismod magna id purus eget nunc ligula suspendisse dui netus.
              Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis
              vulputate et vulputate suspendisse natoque id tellus consectetur
              pulvinar et.
            </p>

            {/* CTA Button */}
            <div className="d-flex align-items-center Heroflex-btn">
              <button className="hero-btn">
                <span>Lorem Ipsum</span>
                <FaArrowRight className="hero-arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

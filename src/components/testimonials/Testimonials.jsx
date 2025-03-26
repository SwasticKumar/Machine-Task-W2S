import React from "react";
import { FaLongArrowAltLeft , FaLongArrowAltRight } from "react-icons/fa";
import "./Testimonials.css"; 
import test from "../../assets/test.jfif";
const Testimonials = () => {
  return (
    <section className="m-3 mt-5">
      <div className="container test-container">
        <div className="row align-items-center row-style-test">
          <div className="col-12 col-md-6 text-center text-md-end ">
            <div
              className="test-img-wrapper"
            >
              <img src={test} alt="Testimonial" className="test-img" />
            </div>
          </div>

          {/* Text on Mobile (col-12) and Left on Desktop (col-md-6) */}
          <div className="col-12 col-md-6">
            <h2 className="test-title pb-4">What our customers thought?</h2>

            <p className="test-text mb-3">
              Euismod magna id purus eget nunc ligula suspendisse dui netus.
              Condimentum blandit rutrum at mauris enim pulvinar duis etiam
              duis.
            </p>

            <p className="test-highlight">
              <strong>Holly Davidson</strong>
            </p>
            {/* CTA Button */}
            {/* Arrows for Navigation */}
            <div className="d-flex align-items-center arrow-center">
              <FaLongArrowAltLeft  className="arrow-icon me-4 fs-2" />
              <FaLongArrowAltRight  className="arrow-icon active-arrow fs-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

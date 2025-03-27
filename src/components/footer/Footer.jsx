import React from "react";
import "./Footer.css";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="m-3 my-5">
      <div className="container footer-container">
        <div className="row align-items-center row-style-footer" >
          <div className="col-12 col-md-6 text-left">
            <h2 className="footer-title pb-4">
            Vulputate et pulvinar ethre Suspendisse tellus consecteur
            </h2>
          </div>

          <div className="col-12 col-md-6 ">
            <div className="d-flex align-items-center foo-display">
              <button className="footer-btn">
                <span>Lorem Ipsum</span>
                <FaArrowRight className="footer-arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="row"><div className="col"><hr className="text-light mx-md-5 my-1"/></div></div>
        <div className="row align-items-center row-style-foo">
          <div className="col-12 col-md-6">
            <p className="footer-text mb-1">
              Copyright <FaRegCopyright /> {date.getFullYear()} Swastic Kumar.
            </p>
          </div>
          <div className="col-12 col-md-6 ">
            <p className="footer-highlight ">
              Privacy Policy | Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

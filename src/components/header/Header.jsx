import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import TypingHeader from "../ResuableComponent/TypingHeader";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <div className="container text-center mt-5">
        {/* Subheading */}
        <p className="text-warning fw-bold">RISUS PRAESENT VULPUTATE.</p>
        {/* Typing Effect Title */}
        <TypingHeader />
        {/* Feature List */}
        <ul className="feature-list">
          <li>
            <FaRegCheckCircle /> Cursus Integer
          </li>
          <li>
            <FaRegCheckCircle /> Integer Consequat
          </li>
          <li>
            {" "}
            <FaRegCheckCircle />
            Tellus Euismod Pellentesque
          </li>
          <li>
            <FaRegCheckCircle />
            Aliquot Tristique
          </li>
          <li>
            <FaRegCheckCircle /> Pellentesque Tempus
          </li>
          <li>
            <FaRegCheckCircle /> Mauris Fermentum Praesent
          </li>
        </ul>
        <div className="d-flex justify-content-center bgBtn-color">
          <button className="cta-btn ">
            <span>Lorem Ipsum</span>
            <FaArrowRightLong className="arrow-icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

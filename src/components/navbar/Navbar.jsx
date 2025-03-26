import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import logo from '../../assets/logo.png'
import './Navbar.css'
const Navbar = () => {
  const [selected, setSelected] = useState("GB"); 
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container border-bottom pb-2">
        {/* Left Side - Logo */}
        {/* <a className=" fw-bold" href="#"> */}
        <img src={logo} className="navbar-brand nav-logo" alt="logo"/>
        {/* </a> */}

        {/* Right Side - Flag Selector */}
        <div className="d-flex align-items-center">
          <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
            countries={["GB", "US", "FR", "DE", "IN"]}
            showSelectedLabel={false} 
            showOptionLabel={false}    
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

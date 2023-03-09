import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-container-content">
        <div className="nav-container-content-left">
          <h1>Imran</h1>
          <p>Ahmad</p>
        </div>
        <div className="nav-container-content-right">
          <button>About</button>
          <button>Passions</button>
          <button>Portfolio</button>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ showMenu, setShowMenu }) => {
    const [menuGoBack, setMenuGoback] = useState(false)
  const handleExitClick = () => {
    setMenuGoback(true);
    setTimeout(() => {
      setShowMenu(false);
    }, 700); // Adjust the delay according to your animation duration
  };

  return (
    <div className={`hamburger-menu ${showMenu ? "active" : ""}`}>
      <button className="exit-button" onClick={handleExitClick}>
        X
      </button>
      <ul className={`menu ${menuGoBack ? "menuback" : ""}`}>
        <li><a onClick={handleExitClick} href="#hometag">Home</a></li>
        <li><a onClick={handleExitClick} href="#skillstag">Skills</a></li>
        <li><a onClick={handleExitClick} href="#projectstag">Projects</a></li>
        <li><a onClick={handleExitClick} href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;

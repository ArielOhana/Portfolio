import React, { useEffect, useState } from "react";
import "./NavBar.css";
import TypingAnimation from "../HomePage/TypingAnimation";
import HamburgerMenu from "./HamburgerMenu";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [screenLocation, setScreenLocation] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      screenLocation >= window.scrollY ? setShowNavbar(true) : setShowNavbar(false);
      setScreenLocation(window.scrollY);
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (
    <>
      <div className={`main_navbar_div ${scrolled && "colored-background"} ${!showNavbar && "main_navbar_div_off"} `}>
        <div className="name-div">
          <div>
            <span className="name coloredname">Ariel</span>
            <span className="name paddright"> Ohana</span>
          </div>
          <TypingAnimation
            speed={30}
            cursor={true}
            sequence={[
              'Full Stack Developer',
              1400,
              'Software Developer',
              1200,
              'Web Developer',
              1400,
              'Specialized MERN stack',
              1400,
            ]}
            className="typeanimation-navbar"
          />
        </div>
        {window.innerWidth > 480 ? (
          <div className="selectors">
            <span className="selector" onClick={() => handleNavigation("hometag")}>
              Home
            </span>
            <span className="selector" onClick={() => handleNavigation("skillstag")}>
              Skills
            </span>
            <span className="selector" onClick={() => handleNavigation("projectstag")}>
              Projects
            </span>
            <span className="selector" onClick={() => handleNavigation("contact")}>
              Contact
            </span>
          </div>
        ) : (
          <button
            className={`hamburger-button ${showMenu ? "hamburger-button-disabled" : ""}`}
            onClick={() => {
              setShowMenu(true);
            }}
          >
            ≡
          </button>
        )}

        {window.innerWidth <= 480 && showMenu && <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />}
      </div>
    </>
  );
}

export default NavBar;
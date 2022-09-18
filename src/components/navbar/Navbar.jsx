import "./navbar.css";
import logo from "../../assets/logo with tag line.svg";
import homeIcon from "../../assets/home-icon.svg";
import callIcon from "../../assets/call-icon.svg";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Qviple Logo" />
      </div>
      <div className="navbar__icons">
        <div className="navbar__icons__call">
          <img src={callIcon} alt="call icon" />
        </div>
        <div className="navbar__icons__home">
          <img src={homeIcon} alt="home icon" />
        </div>
        <div className="navbar__icons__hamburger">
          <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">My work</a>
            <a href="/#">Blog</a>
            <a href="/#">About me</a>
            <button
              className="navbar__icons__hamburger__btn nav-close-btn"
              onClick={showNavbar}
            >
              <FaTimes color="#ffffff" />
            </button>
          </nav>
          <button
            className="navbar__icons__hamburger__btn nav-hamburger-btn"
            onClick={showNavbar}
          >
            <FaBars color="#232233" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useRef, useState } from "react";
import profile from "../img/profile1.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [state, setState] = useState(false);
  const handleMenu = () => {
    if (state) {
      setTimeout(() => {
        setState(!state);
      }, 600);
    } else {
      setTimeout(() => {
        setState(!state);
      }, 150);
    }
  };
  const str = "Web Developer";
  return (
    <div className="homepage" id="home">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <nav className="navbar">
        <div className="logo">
          Aayush
          <div className="line"></div>
        </div>

        <ul
          style={{
            transform: `${state ? "translateY(100%)" : "translateY(-100%)"}`,
          }}
          className="navlinks"
        >
          <li className="pulser">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutName">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#myWork">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <span className="menu-bar" onClick={handleMenu}>
          {state ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}
        </span>
      </nav>
      <div className="main">
        <div className="intro">
          <p className="intro-job">
            <TypeAnimation
              speed={20}
              deletionSpeed={20}
              sequence={[str, 1000, ""]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="typingAnimation"
            />
          </p>
          <p className="intro-content">
            Hi, I am <br />
            <span>Aayush</span>
          </p>
          <button id="download" className="btn">
            <a
              href="https://drive.google.com/file/d/1B9TBJTt6lWirnmkuwUIL3F78Eb9I17La/view?usp=sharing" target="_blanc"
              download={"Resume.pdf"}
            >
              Download CV
            </a>
          </button>
        </div>
        <div className="imageDiv">
          <img src={profile} alt="image" />
          <div></div>
        </div>
      </div>
      <a href="#home">
        <button className="toTop">
          <i class="fa-solid fa-caret-up"></i>
        </button>
      </a>
    </div>
  );
};

export default Home;

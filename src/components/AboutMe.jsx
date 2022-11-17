import React from "react";
import bg2 from "../img/dp1-circular.jpg";

const AboutMe = () => {
  return (
    <div className="about" id="aboutName">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      {/* <div className="img-div">
        <img src={bg2}></img>
      </div> */}
      <div className="about-content">
        <h1 className="downline">About Me</h1>
        <div className="about-avatar">
          <img src={bg2} />
        </div>
        <p className="about-content-desc">
          Hi, my name is <span style={{ color: "cyan" }}>Aayush Chauhan</span>{" "}
          . I am a undergraduate B.Tech(IT) student. I am a front-end developer
          who loves to work on ReactJS-based projects. I am a learner that
          values growth and determination. I have mentioned below my skills
          learnt till now. I have also made some projects using my skills out
          which the best ones are showcased below. I am interested and open to
          work as a Front-end developer.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

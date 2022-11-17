import React from "react";

const ContactMe = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="downline">Contact Me</h1>
      <div className="contact-container">
        <div className="formSection">
          <form action="https://formspree.io/f/xyyvopla" method="POST">
            <input
              name="username"
              type="text"
              placeholder="Enter Your Name"
              required
              autoComplete="off"
            />
            <input
              name="mail"
              type="email"
              placeholder="Enter Your Email"
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <button id="submit" className="btn" value={"send"}>
              Submit
            </button>
          </form>
        </div>
        <div className="detailsBox">
          <div id="mail" className="details">
            <i className="fa-solid fa-envelope"></i>
            <span>aayush6802@gmail.com</span>
          </div>
          <div id="phone" className="details">
            <i className="fa-solid fa-phone"></i>
            <span>+91-8920802425</span>
          </div>
          <div id="socioLinks">
            {/* <i className="fa-brands fa-facebook"></i> */}
            <a
              href="https://twitter.com/AayushC31342283"
              target="_blanc"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/aayush68200/"
              target="_blanc"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aayush-chauhan-5564b2218/"
              target="_blanc"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/aayush6802" target="_blanc">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

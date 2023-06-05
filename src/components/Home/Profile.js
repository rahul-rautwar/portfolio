import React from "react";
import Typical from "react-typical";
// import Typical from "react-typical";
import "./Profile.css";
export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icons">
              <a href="https://github.com/rahul-rautwar">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/rahulrautwar/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/rahul_rautwar/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/user/rahulrautwar">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/rahul_rautwar">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Rahul</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1 className="">
                <Typical
                  loop={Infinity}
                  steps={[
                    "Senior Frontend Developer 🧑‍💻",
                    "1000",
                    "React Developer 💻",
                    "1000",
                    "Angular Web Developer 📱",
                    "1000",
                    "Web Developer 🌐",
                    "1000",
                  ]}
                ></Typical>
              </h1>
              <span className="profile-role-tagline">
                I'm a Front-End Software Developer by passion and who loves
                creative coding.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me!!</button>
            <a href="Rahul_Rautwar_Resume.pdf" download="Rahul Rautwar Resume">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

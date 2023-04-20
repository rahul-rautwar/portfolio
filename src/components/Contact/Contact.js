import React from "react";
import Typical from "react-typical";
import imgContacts from "../../assets/img/mailz.jpeg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="main-container">
      <h1
        id="ContactMe"
        className="font-mono mb-4 text-center font-medium text-2xl sm:text-3xl lg:text-4xl"
      >
        Contact Me
      </h1>
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="https://web.facebook.com/">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://www.youtube.com/">
            <i className="fa fa-youtube-square" />
          </a>
          <a href="https://twitter.com/">
            <i className="fa fa-twitter" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgContacts} alt=" not found" />
          </div>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" />

            <label htmlFor="email">Email</label>
            <input type="email" />

            <label htmlFor="message">Message</label>
            <textarea type="text" />

            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

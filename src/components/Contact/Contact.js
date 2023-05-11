import React, { useRef } from "react";
import Typical from "react-typical";
import emailjs from "@emailjs/browser";
import imgContacts from "../../assets/img/mailz.jpeg";
import "./Contact.css";
import { SectionHeading } from "../SectionHeading/SectionHeading";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q0tcdfh",
        "template_bexzb8k",
        form.current,
        "6i-TdtFjSEhcP1ALR"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="main-container">
      {/* <h1
        id="ContactMe"
        className="font-mono mb-4 text-center font-medium text-2xl sm:text-3xl lg:text-4xl"
      >
        Contact Me
      </h1> */}
      <div id="ContactMe">
        <SectionHeading
          title={"Contact Me"}
          subTitle={"Lets Keep In Touch"}
        ></SectionHeading>
      </div>
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
          <form ref={form} onSubmit={(e) => sendEmail(e)}>
            <label htmlFor="name">Name</label>
            <input type="text" name="user_name" required />

            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" required />

            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" required />

            <div className="send-btn">
              {/* <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
              </button> */}
              <input type="submit" className="submit-btn" value="Send">
                {/* <i className="fa fa-paper-plane" /> */}
              </input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

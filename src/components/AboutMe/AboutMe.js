import React from "react";
import ProfileImg from "../../assets/img/rahulprofilephoto.jpg";
import "./AboutMe.css";
export const AboutMe = () => {
  return (
    <div className=" py-[75px] sm:py-[100px] mx-auto px-5">
      <h1
        id="AboutMe"
        className="font-mono mb-4 text-center font-medium text-2xl sm:text-3xl lg:text-4xl"
      >
        About Me
      </h1>
      <div className="row">
        <div className="col-lg-4 mx-auto">
          <img className="profile-img" src={ProfileImg} alt="profile" />
        </div>
        <div className="col-lg-6 mx-auto mt-20">
          I'm Rahul. I'm a Software Engineer by profession and who loves
          Frontend Development
          <br />
          <br /> I build beautifull websites using Frontend technologies.
          <br />
          <br /> I'm proficient in Frontend skills like Angular, React.js,
          VueJs, Redux, Javascipt, TypeScript, HTML, Tailwind CSS, SaSS, Css3
          and many more.
        </div>
      </div>
    </div>
  );
};

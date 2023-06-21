import React from "react";
import GitHubCalendar from "react-github-calendar";
import { SectionHeading } from "../SectionHeading/SectionHeading";

const GithubCalendar = () => {
  return (
    <div className=" py-[75px]">
      <div id="github">
        <SectionHeading
          title={"My Github Calendar"}
          subTitle={"GitHub Contributions Calendar"}
        ></SectionHeading>
      </div>
      <div class="flex flex-wrap justify-center w-full gap-4">
        <GitHubCalendar username="rahul-rautwar" year="2023" />
      </div>
    </div>
  );
};

export default GithubCalendar;

import React from "react";
import "./Skills.css";

import ReactLogo from "../../assets/img/icons/react.png";
import AngularLogo from "../../assets/img/icons/angular.png";
import VueLogo from "../../assets/img/icons/vue.png";
import JSLogo from "../../assets/img/icons/js.png";
import TSLogo from "../../assets/img/icons/ts.png";
import ReduxLogo from "../../assets/img/icons/redux.png";
import HtmlLogo from "../../assets/img/icons/html.png";
import CssLogo from "../../assets/img/icons/css.png";
import SassLogo from "../../assets/img/icons/sass.png";
import JestLogo from "../../assets/img/icons/jest.png";
import GitLogo from "../../assets/img/icons/git.png";
import NodeLogo from "../../assets/img/icons/node.png";
import TailwindLogo from "../../assets/img/icons/tailwind.png";
import BootstrapLogo from "../../assets/img/icons/bootstrap.png";
import StencilLogo from "../../assets/img/icons/stencil.png";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export const Skills = () => {
  return (
    <div className="py-[75px] sm:py-[100px]">
      <div className="flex flex-col w-full max-w-screen-xl mx-auto px-5">
        {/* <h1
          id="Skills"
          className="font-mono mb-4 text-center font-medium text-2xl sm:text-3xl lg:text-4xl"
        >
          Skills
        </h1> */}
        <div id="Skills">
          <SectionHeading
            title={"Skills"}
            subTitle={"Experties in"}
          ></SectionHeading>
        </div>
        <div className="flex flex-wrap justify-center w-full gap-3 sm:gap-0">
          <a
            href="https://angular.io/"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer"
            title="Angular"
          >
            <img src={AngularLogo} alt={` Angular logo`} />
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="React"
          >
            <img src={ReactLogo} alt={` React logo`} />
          </a>
          <a
            href="https://vuejs.org/"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="Vue"
          >
            <img src={VueLogo} alt={` Vue logo`} />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="JavaScript"
          >
            <img src={JSLogo} alt={` JavaScript logo`} />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="TypeScript"
          >
            <img src={TSLogo} alt={` TypeScript logo`} />
          </a>
          <a
            href="https://redux.js.org/"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="Redux"
          >
            <img src={ReduxLogo} alt={` Redux logo`} />
          </a>
          <a
            href="https://www.w3schools.com/html/"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="HTML"
          >
            <img src={HtmlLogo} alt={` HTML logo`} />
          </a>
          <a
            href="https://www.w3schools.com/css/default.asp"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="CSS"
          >
            <img src={CssLogo} alt={` CSS logo`} />
          </a>
          <a
            href="https://sass-lang.com/"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="SASS"
          >
            <img src={SassLogo} alt={` SASS logo`} />
          </a>
          <a
            href="https://jestjs.io/docs/getting-started"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="Jest"
          >
            <img src={JestLogo} alt={` Jest logo`} />
          </a>
          <a
            href="https://git-scm.com/"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="GIT"
          >
            <img src={GitLogo} alt={` GIT logo`} />
          </a>
          <a
            href="https://nodejs.org/en"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="NodeJs"
          >
            <img src={NodeLogo} alt={` NodeJs logo`} />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="Tailwind"
          >
            <img src={TailwindLogo} alt={` Tailwind logo`} />
          </a>
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="Bootstrap"
          >
            <img src={BootstrapLogo} alt={` Bootstrap logo`} />
          </a>
          <a
            href="https://stenciljs.com/"
            target="_blank"
            class="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex justify-center flex-col sm:m-4 p-6 border-2 hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px]"
            rel="noreferrer" title="StencilJs"
          >
            <img src={StencilLogo} alt={` StencilJs logo`} />
          </a>
        </div>
      </div>
    </div>
  );
};

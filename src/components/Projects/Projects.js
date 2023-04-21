import React from "react";

import YouTubeImg from "../../assets/img/projects/youtube.png";
import FooDVillaImg from "../../assets/img/projects/foodvilla.png";
import PortfolioImg from "../../assets/img/projects/portfolio.png";

export const Projects = () => {
  return (
    <div>
      <h1
        id="Projects"
        className="font-mono mb-4 text-center font-medium text-2xl sm:text-3xl lg:text-4xl"
      >
        Projects
      </h1>
      <div class="flex flex-wrap justify-center w-full gap-4">
        <a
          href="notfound"
          target="_blank"
          class="w-[356px] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-md"
          rel="noreferrer"
        >
          <div class="h-[200px] bg-no-repeat bg-center bg-cover rounded-t-md">
            <img src={PortfolioImg} alt="youtube clone project" />
          </div>
          <div class="p-4">
            <div class="font-mono font-bold text-xl">Portfolio</div>
            <div class="font-normal text-sm sm:text-base">
              Portfolio website built using React.
            </div>
          </div>
        </a>
        <a
          href="https://rahulrautwar-youtube-clone.netlify.app/"
          target="_blank"
          class="w-[356px] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-md"
          rel="noreferrer"
        >
          <div class="h-[200px] bg-no-repeat bg-center bg-cover rounded-t-md">
            <img src={YouTubeImg} alt="youtube clone project" />
          </div>
          <div class="p-4">
            <div class="font-mono font-bold text-xl">YouTube clone</div>
            <div class="font-normal text-sm sm:text-base">
              YouTube clone built using React, Redux and Tailwind.
            </div>
          </div>
        </a>
        <a
          href="notfound"
          target="_blank"
          class="w-[356px] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-md"
          rel="noreferrer"
        >
          <div class="h-[200px] bg-no-repeat bg-center bg-cover rounded-t-md">
            <img src={FooDVillaImg} alt="youtube clone project" />
          </div>
          <div class="p-4">
            <div class="font-mono font-bold text-xl">Swiggy clone</div>
            <div class="font-normal text-sm sm:text-base">
              Swiggy clone built using React, Redux and Tailwind.
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

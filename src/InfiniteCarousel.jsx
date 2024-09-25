import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

const techStackIcons = ()=>{
  return(
    <div className="animate-slide-left inline-block w-max">
      <img
        className="mx-4 inline h-16 hover:scale-125"
        src="https://www.svgrepo.com/show/452092/react.svg"
        alt="React"
      />
      <img
        className="mx-4 inline h-16 hover:scale-125"
        src="https://www.svgrepo.com/show/452045/js.svg"
        alt="JavaScript"
      />
      <img
        className="mx-4 inline h-16 hover:scale-125"
        src="https://www.svgrepo.com/show/374118/tailwind.svg"
        alt="TailwdinCSS"
      />
      <img
        className="mx-4 inline h-16 hover:scale-125"
        src="https://www.svgrepo.com/show/452091/python.svg"
        alt="Python"
      />
      <img
        className="mx-4 inline h-16 hover:scale-125"
        src="https://www.svgrepo.com/show/373554/django.svg"
        alt="Django"
      />
      <img
        className="mx-4 inline h-16 hover:scale-125"
        src="https://www.svgrepo.com/show/354200/postgresql.svg"
        alt="PostreSQL"
      />
      <img
        className="mx-4 inline h-16 hover:scale-125"
        src="https://www.svgrepo.com/show/373848/mysql.svg"
        alt="mySQL"
      />
      <img
        className="mx-4 inline h-16 hover:scale-125"
        src="https://www.svgrepo.com/show/452210/git.svg"
        alt="Git"
      />
      <img
        className="mx-4 inline h-16 hover:scale-125"
        src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png"
        alt="GitHub"
      />
      <img
        className="mx-4 inline h-16 hover:scale-125"
        src="https://www.svgrepo.com/show/448221/docker.svg"
        alt="Docker"
      />
    </div>
  )
}

export function InfiniteCarousel() {
  const {t} = useTranslation()
  return (
    <section id="tech-stack" className="bg-transparent w-3/5 mx-auto text-white pt-8 pb-10 sm:w-full  sm:pt-28">
      <h2 className="sm:text-center text-left text-2xl mb-2 font-bold leading-8 ">
        {t("Tech stack")}
      </h2>
      <p className="sm:text-center text-left1 text-lg font-extralight leading-8 ">
        {t("Sub tech stack")}
      </p>

      <div className="relative overflow-hidden whitespace-nowrap py-10 backdrop-blur-xl [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        {techStackIcons()}
        {techStackIcons()}
      </div>
    </section>
  );
}

export default InfiniteCarousel;

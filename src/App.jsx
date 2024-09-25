import { HeaderNav } from "./HeaderNav.jsx";
import { Presentation } from "./Presentation.jsx";
import React from "react";
import { ProjectSection } from "./ProjectSection.jsx";
import { AboutSection } from "./AboutSection.jsx";
import { Email } from "./Email.jsx";
import InfiniteCarousel from "./InfiniteCarousel.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";
import '../i18n';
import "./index.css";

export function App() {
  return (
    <div className="flex flex-col gap-30 bg-gradient-to-r from-gray-950 from-10% via-gray-900 via-30% to-gray-800 to-90%  -mb-20 md:px-15 sm:px-0 sm:gap-10">
      <HamburgerMenu />
      <HeaderNav />
      <Presentation />
      <InfiniteCarousel />
      <ProjectSection />
      <AboutSection />
      <Email />
    </div>
  );
}

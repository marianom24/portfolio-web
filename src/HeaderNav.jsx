import { useTranslation } from "react-i18next";
import { CodeIcon } from "./assets/components/icons/CodeIcon";
import ToggleLanguage from "./ToggleLanguage";

export function HeaderNav() {
  const {t} = useTranslation()
  return (
    <header className="flex mx-auto inset-x-0 w-3/5 flex-row justify-between py-5 z-10 items-center text-white backdrop-blur-md border-white fixed sm:w-full sm:py-3 sm:hidden md:w-full md:px-10">
      <div className="w-10 h-10">
        <img src="./logonobg.png" /> 
      </div>
      <nav className="flex gap-12 text-xl sm:text-lg">
        <a
          className=" font-semibold cursor-pointer  w-auto opacity-70 px-3 py-1 bg-white bg-opacity-0 rounded-xl hover:opacity-100 hover:bg-opacity-85 hover:text-black"
          href="#presentation"
        >
          Mariano
        </a>
        <a
          className="font-semibold cursor-pointer opacity-70  px-3 py-1 bg-white bg-opacity-0 rounded-xl hover:opacity-100 hover:bg-opacity-85 hover:text-black"
          href="#project-section"
        >
          {t("Projects")}
        </a>
        <a
          className="font-semibold cursor-pointer opacity-70 h-10 w-auto text-nowrap px-3 py-1 bg-white bg-opacity-0 rounded-xl hover:opacity-100 hover:bg-opacity-85 hover:text-black"
          href="#about-section"
        >
          {t("About me")}
        </a>
        <ToggleLanguage />
      </nav>
    </header>
  );
}

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { ButtonScroll } from "./ButtonScroll.jsx";

export function Presentation() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <div
        className="flex w-3/5 mx-auto justify-between min-h-[700px] h-screen items-center  box-border font-sans text-white md:w-5/6 sm:w-full  sm:flex-col sm:gap-16 sm:justify-start sm:mt-[120px]"
        id="presentation"
      >
        <div className="flex flex-col align-left w-7/12 max-w-xl sm:w-full sm:text-center sm:order-2">
          <p className="text-2xl opacity-80 font-semibold">
            {t("Hi! im")}
          </p>
          <div className="pt-4 flex flex-col ">
            <h1 className="text-5xl font-semibold bg-gradient-to-r from-white from-5% via-grey-300 via-30% to-gray-600 to-90% inline-block text-transparent bg-clip-text text-nowrap">
              Mariano Moreno
            </h1>
            <h1 className="text-5xl font-semibold bg-gradient-to-r from-white from-5% via-grey-300 via-30% to-gray-600 to-90% inline-block text-transparent bg-clip-text">
              Full-Stack Developer
            </h1>
          </div>
          <p className="text-xl sm:text-md pt-4 w-5/6 font-extralight text-pretty sm:w-full">
            {t('Description presentation')}

          </p>
          <div className="flex gap-5 pt-8 sm:justify-center sm:px-2 flex-wrap">
            <a
              className="px-3 py-2 h-13 text-lg items-center rounded-xl flex gap-2 hover:outline"
              href="#email"
            >
              <div className="flex w-8 h-8 items-center">
                <IoSend  size={26}/>
              </div>
              <p className="text-nowrap">{t("Contact")}</p>
            </a>

            <a
              className="px-3 py-2 h-13 text-lg items-center rounded-xl flex gap-2 hover:outline"
              href="https://www.linkedin.com/in/mariano-jose-moreno/"
              target="_blank"
            >
              <div className="flex w-8 h-8 items-center">
                <FaLinkedin size={28}/>
              </div>
              Linkedin
            </a>

            <a
              className="px-3 py-2 h-13 text-lg items-center rounded-xl flex gap-2 hover:outline"
              href="https://github.com/marianom24"
              target="_blank"
            >
              <div className="flex w-8 h-8 items-center">
                <FaGithub size={28}/>
              </div>
              GitHub
            </a>
          </div>
        </div>
        <div className="flex justify-end items-center bg-transparent w-5/12 md:w-7/12 sm:w-full sm:order-1">
          <img
            src="https://res.cloudinary.com/dpps6wg2p/image/upload/v1714059785/xxxmme2wx0zk2owufjic.png"
            alt="Picture of myself"
            className="opacity-100 w-96 object-cover rounded-full bg-transparent shadow-white shadow"
          />
        </div>
      </div>
      <div className="-mt-20 flex justify-center sm:hidden">
        <ButtonScroll />
      </div>
    </div>
  );
}


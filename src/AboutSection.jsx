import { useTranslation } from "react-i18next";

export function AboutSection() {
  const { t } = useTranslation();
  return (
    <div
      className="flex w-3/5 mt-36 mb-20 mx-auto text-white pb-20 sm:w-full justify-between sm:gap-14 md:w-9/12"
      id="about-section"
    >
      <div className="w-2/4 sm:w-full">
        <h1 className="text-3xl font-bold sm:text-center">{t("About me")}</h1>
        <p className="text-lg mt-10 sm:text-center">
          {t("About me description")}
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/dpps6wg2p/image/upload/v1714059785/xxxmme2wx0zk2owufjic.png"
        loading="lazy"
        alt="Picture of myself"
        className="opacity-100 size-60 object-cover rounded-full shadow-white shadow max-xl:w-60 max-xl:mx-auto max-xl:mt-12 sm:hidden"
      />
    </div>
  );
}

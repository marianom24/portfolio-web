import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

export function ProjectSection() {
  const {t} = useTranslation()
  return (
    <div className="w-3/5 mx-auto md:w-full md:px-12 sm:px-0 transition-all duration-300" id="project-section">
      <div className="flex flex-col gap-2 justify-start pb-6 w-full md:justify-center">
        <h1 className="text-4xl font-bold text-white sm:text-center">{t("Projects")}</h1>
        <p className="sm:text-center text-white text-left1 text-lg font-extralight leading-8 ">
      </p>
      </div>
      <div className="flex flex-col mx-auto md:w-full justify-center gap-16 ">
        <ProjectCard
          title={"TrackTi"}
          subtitle={"stats for your time"}
          imgUrl={
            "https://res.cloudinary.com/dpps6wg2p/image/upload/v1727279660/Captura_de_pantalla_2024-09-25_120744_biehr3.png"
          }
          description={
            t("Description TrackTi")
          }
          stack={["Django REST", "PostgreSQL", "React", "TailwindCSS", "Flowbite","Recharts"]}
          repoLink={"https://github.com/marianom24/Trackti"}
          webLink={"https://trackti.vercel.app/login"}
        />
        <ProjectCard
          title={"LittleLemon"}
          subtitle={"API rest"}
          imgUrl={
            "https://res.cloudinary.com/dpps6wg2p/image/upload/v1727279452/226729651-63c82654-20d7-4783-b1a9-4c97afae96d4_q9rl8s.png"
          }
          stack={["Django REST", "SQLite"]}
          description={t("Description LittleLemon")}
          repoLink={"https://github.com/marianom24/littlelemon-orders"}
          webLink={"https://github.com/marianom24/littlelemon-orders"}
        />
      </div>
    </div>
  );
}

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
            "https://res.cloudinary.com/dpps6wg2p/image/upload/v1727190145/Captura_de_pantalla_2024-09-24_115956.jpg"
          }
          description={
            t("Description TrackTi")
          }
          stack={["Django REST", "PostgreSQL", "React", "TailwindCSS", "Flowbite","Recharts"]}
          repoLink={"https://github.com/marianom24/Trackti"}
          webLink={"https://trackti.vercel.app/login"}
        />
        <ProjectCard
          title={"WebApp"}
          subtitle={"for myself"}
          imgUrl={
            "https://www.searchenginejournal.com/wp-content/uploads/2023/08/screenshot-2023-08-23-at-10.55.02-am-64e61fe27a2a3-sej.png"
          }
          stack={["Django REST", "SQLite", "Tailwind", "MongoDB"]}
        />
      </div>
    </div>
  );
}

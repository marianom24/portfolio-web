import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function ProjectCard({ title, subtitle, stack, imgUrl, description, repoLink, webLink }) {
  return (
    <div className="grid grid-cols-2 w-full h-auto p-6 gap-6 items-start bg-gray-400 bg-opacity-5 rounded-3xl text-white sm:grid-cols-1 sm:p-4 md:p-6 ">
      <div className="w-full relative">
        <img
          src={imgUrl}
          loading="lazy"
          alt="Project Screenshot"
          className="object-cover rounded-3xl shadow-sm shadow-gray-700 w-full h-56 sm:h-48 md:h-64"
        />
        <span className="absolute bottom-0 flex w-full justify-end pr-4 gap-4 backdrop-blur-sm h-12 rounded-b-3xl ">
          <a className="flex gap-2 items-center text-sm md:text-base hover:scale-110 text-black font-semibold" href={repoLink} target="_blank" >
            <FaGithub size={20} color="black" />
            Code
          </a>

          <a className="flex gap-2 items-center text-sm md:text-base hover:scale-1100 text-black font-semibold" href={webLink}  target="_blank">
            <FaExternalLinkAlt size={20} color="black" />
            Live
          </a>

        </span>
      </div>
      <div className="flex flex-col justify-between text-left px-6 sm:px-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
          <p className="text-base md:text-lg opacity-70 font-semibold">{subtitle}</p>
          <p className="mt-4 opacity-90 text-left font-light line-clamp-7 sm:line-clamp-6 text-sm md:text-base">
            {description}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap mt-4">
          {stack.map((item, index) => (
            <SpanStack key={index} tech={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SpanStack({ tech }) {
  return (
    <div
      className="mt-2 px-3 py-1 rounded-xl font-semibold bg-gray-700 bg-opacity-70 shadow shadow-gray-700 text-sm md:text-base"
      id={tech}
    >
      <p className="text-white">{tech}</p>
    </div>
  );
}

export default ProjectCard;
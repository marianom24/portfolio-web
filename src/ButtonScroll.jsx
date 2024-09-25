import { FaArrowDown } from "react-icons/fa";

export function ButtonScroll() {
  return (
    <a href="#tech-stack">
      <span className="flex justify-center mx-auto bg-opacity-70 text-center rounded-full bg-white clip-bg-text font-bold wrap p-4 animate-bounce">

          <FaArrowDown color="black"/>
        
      </span>
    </a>
  );
}

export default ButtonScroll
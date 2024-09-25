import React, { useState,useEffect } from "react";
import i18n from "../i18n";

export function ToggleLanguage() {
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
    localStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
    setIsEnglish(savedLanguage === 'en');
  }, []);

  return (
    <div className="flex gap-3 items-center">
      <img src="https://www.svgrepo.com/show/405610/flag-for-flag-spain.svg" className="size-7"/>

      <button
        onClick={toggleLanguage}
        className={`${isEnglish ? "justify-end" : "justify-start"} =  bg-slate-700 w-16 h-8 p-0 mx-auto rounded-full flex transition duration-600 shadow-2xl`}
      >
        <span className="flex items-center justify-center bg-white border-black border-1 transition duration-200 rounded-full w-1/2 h-full m-0 shadow-xl text-sm text-black font-mono">
        </span>
      </button>
      <img src="https://www.svgrepo.com/show/405643/flag-for-flag-united-kingdom.svg" className="size-7"/>
    </div>

  );
}

export default ToggleLanguage;

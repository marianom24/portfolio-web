import { useState } from "react";
import { useTranslation } from "react-i18next";
  
export function Email() {
  const [email, setEmailSpan] = useState("marianojosmoreno@gmail.com");
  const { t } = useTranslation();

  const SpanMailCopy = () =>{
    const copyEmail = () => {
      navigator.clipboard.writeText(email);
    };
    copyEmail();
    setEmailSpan(t("Copied"));
    setTimeout(() => {
      setEmailSpan("marianojosmoreno@gmail.com");
    }, 2500);
  }
  return (
    <div
      className="flex w-3/5 sm:w-11/12 p-4 mb-10 mx-auto gap-3 bg-slate-300 bg-opacity-5 border-white border rounded-xl text-white justify-center items-center md:flex-col 
      sm:text-center sm:mx-auto"
      id="email"
    >
      <p>{t("Email me")}</p>
      <span
        className="py-3 px-5 font-semibold border-white border text-black bg-gray-200 rounded-xl  hover:bg-transparent hover:text-white"
        id="span-mail"
        onClick={SpanMailCopy}
      >
        {email}
      </span>
    </div>
  );
}

export default Email;

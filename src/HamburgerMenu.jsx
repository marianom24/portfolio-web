import { useState } from "react"
import ToggleLanguage from "./ToggleLanguage"
import { useTranslation } from "react-i18next"

export function HamburgerMenu(){
    const [showMenu, setShowMenu] = useState(false)
    const {t} = useTranslation()

    const handleShowMenu = ()=>{
        setShowMenu(!showMenu)
        return
    }

    return(
        <nav className="justify-between border-gray-200 w-screen z-20 backdrop-blur-lg fixed hidden sm:inline-block sm:px-5">
            <div className="flex flex-wrap items-center justify-between p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl font-semibold text-white">Mariano</span>
                </a>
                <ToggleLanguage/>
                <button type="button" onClick={handleShowMenu} className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400" aria-expanded="false">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                {
                    showMenu && (
                        <div className="w-full h-auto z-10 absolute items-center top-16 left-0 pb-6 text-center bg-slate-800" id="navbar-hamburger">

                            <ul className="flex flex-col font-medium pt-6 rounded-lg">
                                
                                <li>
                                <a href="#about-section" onClick={handleShowMenu} className="block py-2 px-3 text-2xl rounded hover:bg-gray-100 text-gray-300 hover:text-black">Mariano</a>
                                </li>
                                <div className="bg-white h-[1px] bg-opacity-15 "></div>
                                <li>
                                <a href="#project-section" onClick={handleShowMenu} className="block py-2 px-3  text-2xl  rounded hover:bg-gray-100 text-gray-300 hover:text-black">{t("Projects")}</a>
                                </li>
                                <div className="bg-white h-[1px] bg-opacity-15 "></div>

                                <li>
                                <a href="#about-section" onClick={handleShowMenu} className="block py-2 px-3 text-2xl  rounded  hover:bg-gray-100 text-gray-300 hover:text-black">{t("About me")}</a>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}
export default HamburgerMenu
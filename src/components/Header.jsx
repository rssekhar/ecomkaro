import { useContext,useState } from "react"
import { ToggleTheme } from "./Contexts"

export default function Header() {
    return (
        <>
            <section>
                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center justify-between shadow-md">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">EcomKaro</span>
                        </a>
                        
                    </div>
                </header>
            </section>
        </>
    )
}
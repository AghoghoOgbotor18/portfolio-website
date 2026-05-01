import React from 'react'
import { NavLink } from 'react-router-dom'
import {FiArrowUpRight} from "react-icons/fi"

const Header = () => {
    const links = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about" },
        {name: "Projects", path: "/projects"},
        {name: "Contact Me", path: "/contact"}
    ]
    return (
        <nav className="container mx-auto flex justify-center items-center">
            <div className='border bg-black/90 w-[35%] text-white py-2 px-4 rounded-4xl flex justify-center items-center mt-7'>
                <ul className='flex gap-10 justify-center items-center'>
                    {
                        links.map((link, index) => (
                            <NavLink key={index} to={link.path} className={({ isActive }) => index === links.length - 1 ? " flex justify-center items-center gap-1 bg-gray-100 py-2 px-3 rounded-2xl text-black font-medium" : `text-gray-200 font-medium ${isActive ? "text-white" : ""}`}>
                                {link.name}
                                {index === links.length - 1 && (
                                    <FiArrowUpRight size={22} className='bg-black/90 text-white rounded-full p-1' />
                                )}
                            </NavLink>
                        ))
                    }
                </ul>
            </div>

        </nav>
    )
}

export default Header

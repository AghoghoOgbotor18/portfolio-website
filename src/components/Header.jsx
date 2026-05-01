import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiArrowUpRight } from "react-icons/fi"
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact Me", path: "/contact" }
    ];

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-7 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] bg-black/90 backdrop-blur-md border border-white/10 text-white py-4 px-6 rounded-4xl flex justify-between items-center z-[70] shadow-lg">

                {/* Logo */}
                <Link to="/" className='text-3xl brand-name'>
                    Aghogho
                </Link>

                {/* Desktop Links */}
                <ul className='hidden md:flex gap-10 justify-center items-center'>
                    {
                        links.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.path}
                                className={({ isActive }) =>
                                    index === links.length - 1
                                        ? "flex items-center gap-1 bg-gray-100 py-2 px-3 rounded-2xl text-black font-medium"
                                        : `text-gray-200 font-medium transition ${isActive ? "text-white" : "hover:text-white"}`
                                }
                            >
                                {link.name}

                                {
                                    index === links.length - 1 && (
                                        <FiArrowUpRight
                                            size={22}
                                            className='bg-black text-white rounded-full p-1'
                                        />
                                    )
                                }

                            </NavLink>
                        ))
                    }
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleOpen}
                    className='md:hidden text-white z-[80]'
                >
                    {
                        isOpen
                            ? <FaTimes size={22} />
                            : <FaBars size={22} />
                    }
                </button>

            </nav>

            {/* Backdrop */}
            {
                isOpen && (
                    <div
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[20] md:hidden"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )
            }

            {/* Mobile Menu */}
            {
                isOpen && (
                    <div className="fixed top-28 left-1/2 -translate-x-1/2 w-[90%] bg-black/90 backdrop-blur-md border border-white/10 text-white rounded-3xl py-8 flex flex-col gap-6 justify-center items-center z-[60] md:hidden">

                        {
                            links.map((link, index) => (
                                <NavLink
                                    key={index}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        index === links.length - 1
                                            ? "flex items-center gap-1 bg-gray-100 py-2 px-4 rounded-2xl text-black font-medium"
                                            : `text-gray-200 font-medium transition ${isActive ? "text-white" : "hover:text-white"}`
                                    }
                                >

                                    {link.name}

                                    {
                                        index === links.length - 1 && (
                                            <FiArrowUpRight
                                                size={22}
                                                className='bg-black text-white rounded-full p-1'
                                            />
                                        )
                                    }

                                </NavLink>
                            ))
                        }

                    </div>
                )
            }
        </>
    )
}

export default Header
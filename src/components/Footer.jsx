import React from 'react';
import {FaDiscord, FaPhone, FaLinkedin, FaTiktok, FaWhatsapp, FaFacebook} from "react-icons/fa"
import {FiArrowUpRight} from "react-icons/fi"
import { Link, NavLink } from 'react-router';

const Footer = () => {

  const links = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about" },
    {name: "Projects", path: "/projects"},
    {name: "Contact", path: "/contact"}
  ];

  return (
    <footer className='bg-black/96 md:bg-black text-white flex justify-center items-center pt-7 md:py-7'>
        <div className='bg-black flex flex-col gap-8 md:gap-10 px-5 py-10 md:p-5 mx-10'>
          <div className='flex justify-center items-center animate-pulse'>
            <p className='shadow-4xl bg-white text-black font-bold rounded-2xl text-[10px] py-2 px-3 flex justify-center items-center gap-1 w-fit'><span className='w-2 h-2 rounded-full bg-green-600'></span> Let's Connect</p>
          </div>
          <h3 className='text-6xl md:text-7xl'>Let's Build <br /><span className='text-gray-300'>Incredible Website Together.</span></h3>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-6'>
            <div>
              <p className='text-gray-400 text-sm'>Email</p>
              <p className='text-md pt-1.5'>aghoghoogbotor@gmail.com</p>
            </div>
            <div>
              <p className='text-gray-400 text-sm'>Call Me</p>
              <p className='text-md pt-1.5'>Book Now</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-gray-400 text-sm'>Social</p>
              <div className='flex items-center gap-4'>
                {
                  [<FaLinkedin />, <FaFacebook />, <FaTiktok />, <FaPhone />].map((social, index) => (
                    <Link to="#" key={index} className='flex justify-center items-center w-7 h-7 bg-gray-200 rounded-full text-black shadow-red-400 shadow-2xl hover:-translate-y-1 duration-500'>{social}</Link>
                  ))
                }
              </div>
            </div>
          </div>
          <hr className='text-gray-200'/>
          <div className='flex flex-col gap-6 md:flex-row md:justify-between md:items-baseline-last'>
            <div className='flex flex-col gap-3'>
              <p className='text-gray-400 text-sm'>Menu</p>
              <div className='grid grid-cols-2 gap-x-5 gap-y-2'>
                {links.map((link, index) => (
                  <NavLink key={index} to={link.path} className={({isActive}) => `text-gray-200 text-xs hover:text-gray-300 ${isActive && "text-white"}`}>{link.name}</NavLink>
                ))}
              </div>
            </div>
            <p className='text-sm'>&copy; 2026 Build with Aghogho</p>
          </div>         
        </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import userPhoto from "../assets/sylvia-photo.jpg"
import { FiRadio } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { FaLinkedin, FaFacebook, FaTiktok, FaPhone, FaMarkdown, FaCheck } from "react-icons/fa"
import AboutCard from './AboutCard'

const AboutMe = () => {

  return (
    <section className='relative flex flex-col justify-center items-center text-white bg-black/95 rounded-md py-20 overflow-hidden'>
      {/* Blur Background */}
      <div className='absolute w-[80%] h-[80%] top-[15%] left-[10%] blur-3xl bg-gray-300 opacity-50'></div>

      <div className='relative z-10 flex flex-col justify-center items-center gap-6 container mx-auto px-3 md:px-15'>
        <p className='bg-black/90 shadow-xl flex justify-center items-center gap-1 text-sm py-2 px-3 rounded-xl w-fit'>
          <FiRadio />
          Frontend Developer
        </p>
        <h2 className='text-3xl md:text-5xl text-center'>
          Aghogho Ogbotor,
          <span className='text-gray-300'> Frontend Developer</span>
        </h2>
        {/* Cards */}
        <div className='flex flex-col lg:flex-row gap-4 w-full'>

          {/* Left Card */}
          <div className='h-fit lg:basis-[38%] bg-black/95 shadow-black/40 shadow-lg rounded-md p-5 flex flex-col gap-5 text-gray-200 overflow-hidden'>
            <div className='relative'>
              <img src={userPhoto} alt="Aghogho" className='w-full h-80 rounded-md object-fit'/>
              <p className='absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center items-center gap-2 bg-black/70 px-3 py-1 rounded-full text-sm'>
                <FiRadio className='animate-pulse text-green-600' />
                Available for work
              </p>
            </div>
            <h4 className='font-bold text-2xl'>Hello, I'm Aghogho Ogbotor</h4>
            <p>Frontend Developer</p>

            {/* Socials */}
            <div className='flex gap-4 my-4 flex-wrap'>
              {
                [<FaLinkedin />, <FaFacebook />, <FaTiktok />, <FaPhone />].map((social, index) => (
                  <Link to="#" key={index} className='text-white border-r border-white/10 px-3 py-2 pr-6 text-xl'>
                    {social}
                  </Link>
                ))
              }
            </div>
            <hr className='border-white/10' />
            {/* Buttons */}
            <div className='flex items-center gap-4 py-3 flex-wrap'>
              <button className='button'>
                View Projects
              </button>
              <button className='button'>
                Download CV
              </button>
            </div>
          </div>

          {/* Right Card */}
          <AboutCard />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
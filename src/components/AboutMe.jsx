import React from 'react'
import userPhoto from "../assets/sylvia-photo.jpg"
import { FiRadio } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { FaLinkedin, FaFacebook, FaTiktok, FaPhone } from "react-icons/fa"

import tailwindcss from "../assets/tailwindcss.png"
import reactjs from "../assets/reactjs.png"
import css from "../assets/css.png"
import html from "../assets/html.png"
import javascript from "../assets/javascript.png"
import shopify from "../assets/shopify.png"
import wordpress from "../assets/wordpress.png"
import firebase from "../assets/firebase.png"
import github from "../assets/github.png"

const AboutMe = () => {

  const tools = [
    { image: reactjs, name: "ReactJS" },
    { image: javascript, name: "JavaScript" },
    { image: tailwindcss, name: "TailwindCSS" },
    { image: html, name: "HTML" },
    { image: css, name: "CSS" },
    { image: firebase, name: "Firebase" },
    { image: wordpress, name: "WordPress" },
    { image: shopify, name: "Shopify" },
    { image: github, name: "Github" }
  ];

  return (
    <section className='relative flex flex-col justify-center items-center text-white bg-black/95 rounded-md py-20 overflow-hidden'>
      {/* Blur Background */}
      <div className='absolute w-[80%] h-[70%] top-[15%] left-[10%] blur-3xl bg-gray-300 opacity-20'></div>
      <div className='relative z-10 flex flex-col justify-center items-center gap-6 container mx-auto px-6 md:px-20'>
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
          <div className='lg:basis-[62%] bg-black/95 shadow-black/40 shadow-lg rounded-md p-3 flex flex-col gap-4 text-gray-200 relative overflow-hidden'>
            {/* About Text */}
            <div className='flex flex-col gap-3'>
              <h3 className='text-3xl font-semibold'>
                About Me
              </h3>
              <p className='leading-7 text-gray-400'>
                I'm Aghogho Ogbotor, a dedicated frontend developer with one year
                experience. I enjoy transforming ideas into interactive user experiences while
                continuously improving my frontend development skills through
                real-world projects and modern technologies.
              </p>
            </div>
            <hr className='border-white/10' />
            <div>
              <h3 className='text-2xl font-semibold mb-4'>
                Quick Stats
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white/5 border border-white/10 p-2 rounded-2xl'>
                  <h4 className='text-2xl font-bold text-white'>1+</h4>
                  <p className='text-gray-400'>Years Experience</p>
                </div>

                <div className='bg-white/5 border border-white/10 p-2 rounded-2xl'>
                  <h4 className='text-2xl font-bold text-white'>10+</h4>
                  <p className='text-gray-400'>Projects Built</p>
                </div>

                <div className='bg-white/5 border border-white/10 p-2 rounded-2xl'>
                  <h4 className='text-2xl font-bold text-white'>100%</h4>
                  <p className='text-gray-400'>Responsive Design</p>
                </div>

                <div className='bg-white/5 border border-white/10 p-2 rounded-2xl'>
                  <h4 className='text-2xl font-bold text-white'>UI</h4>
                  <p className='text-gray-400'>Focused Developer</p>
                </div>
              </div>
            </div>
            <hr className='border-white/10' />

            {/* Specialization */}
            <div>
              <h3 className='text-2xl font-semibold mb-4'>
                What I Specialize In
              </h3>
              <div className='flex flex-wrap gap-3'>
                {
                  [
                    "Responsive Web Design",
                    "React Applications",
                    "Modern UI Development",
                    "Interactive Experiences",
                    "Frontend Development",
                    "Landing Pages"
                  ].map((item, index) => (
                    <span
                      key={index}
                      className='bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm'
                    >
                      {item}
                    </span>
                  ))
                }
              </div>
            </div>
            <hr className='border-white/10' />

            {/* Tools Slider */}
            <div className='flex flex-col justify-center items-center w-full overflow-hidden'>
              <h3 className='text-2xl mb-4 font-semibold'>
                Tools I Use
              </h3>
              <div className='w-full overflow-hidden'>
                <div className='slider-track flex items-center gap-15'>
                  {
                    [...tools, ...tools].map((tool, index) => (
                      <div key={index} className='flex flex-col items-center justify-center gap-2 flex-shrink-0'>
                        <img src={tool.image} alt={tool.name} className='w-15 h-auto' />
                          <p className='text-sm text-gray-400'>
                            {tool.name}
                          </p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <hr className='border-white/10' />

            {/* Currently Learning */}
            <div>
              <h3 className='text-2xl font-semibold mb-4'>
                Currently Learning
              </h3>
              <div className='flex flex-wrap gap-3'>
                {
                  [
                    "TypeScript",
                    "NextJS",
                    "GSAP",
                    "UI/UX Design"
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className='bg-linear-to-r from-gray-700 to-gray-900 px-4 py-2 rounded-full text-sm border border-white/10'
                    >
                      {skill}
                    </span>
                  ))
                }
              </div>

            </div>

            <hr className='border-white/10' />
            {/* Availability */}
            <div className='flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-2xl px-4 py-3 w-fit'>
              <FiRadio className='text-green-500 animate-pulse' />
              <p className='text-green-400'>
                Open to internships & collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
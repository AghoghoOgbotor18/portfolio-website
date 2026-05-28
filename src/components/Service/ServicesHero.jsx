import React from 'react'
import { Link } from 'react-router-dom'
import { MdRadioButtonChecked } from 'react-icons/md'
import { FiArrowUpRight } from 'react-icons/fi'

const ServicesHero = () => (
    <section
        className='relative overflow-hidden py-24 px-10 max-sm:px-4'
        style={{ background: "linear-gradient(0deg, rgba(0,0,0, 0.9) 15%, rgb(202, 202, 202) 100%)" }}
    >
        <div className='absolute w-[60%] h-[60%] top-[10%] left-[20%] blur-3xl bg-gray-400 opacity-5 pointer-events-none' />
        <div className='relative z-10 max-w-6xl mx-auto flex flex-col gap-8'>
            <p className='bg-black/95 text-white py-2 px-5 rounded-full w-fit flex items-center gap-2 text-sm shadow-black shadow-2xl'>
                <MdRadioButtonChecked /> Services
            </p>
            <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-8'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-6xl max-sm:text-4xl font-semibold leading-tight text-black/95'>
                        What I Can <br />
                        <span className='text-blakc/400'>Do For You</span>
                    </h1>
                    <p className='text-black/90 max-w-lg leading-8'>
                        From a simple landing page to a full React application — I bring ideas to life with clean code, thoughtful design, and a genuine focus on user experience.
                    </p>
                </div>
                <div className='flex gap-3 flex-wrap self-start md:self-end'>
                    <Link to="#inquiry" className='button-dark flex items-center gap-2'>
                        Start a Project <FiArrowUpRight size={16} />
                    </Link>
                    <Link to="/projects" className='button-white flex items-center gap-2'>
                        View My Work
                    </Link>
                </div>
            </div>
        </div>
    </section>
)

export default ServicesHero
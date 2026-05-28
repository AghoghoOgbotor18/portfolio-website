import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'

const AboutCTA = () => (
    <section
        className='px-10 max-sm:px-4 py-20'
        style={{ background: "linear-gradient(0deg, rgba(0,0,0, 0.9) 15%, rgb(202, 202, 202) 100%)" }}
    >
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-white/3 border border-white/5 rounded-3xl px-10 py-12 max-sm:px-6'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-4xl font-semibold text-black/90 max-sm:text-3xl'>Let's build something <br /> great together.</h2>
                <p className='text-black/90 text-sm leading-7'>I'm open to freelance projects, internships, and collaborations.</p>
            </div>
            <div className='flex flex-wrap gap-3'>
                <Link to="#" className='button-dark flex items-center gap-2'>
                    Contact Me <FiArrowUpRight size={16} />
                </Link>
                <Link to="/projects" className='button-white flex items-center gap-2'>
                    View Projects
                </Link>
            </div>
        </div>
    </section>
)

export default AboutCTA
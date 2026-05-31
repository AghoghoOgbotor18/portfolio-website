import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiArrowLeft } from 'react-icons/fi'

const ProjectCTA = () => (
    <section className='px-10 max-sm:px-4 py-16 border-t border-white/5'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-white/3 border border-white/5 rounded-3xl px-10 py-10 max-sm:px-6'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-semibold text-white'>Like what you see?</h3>
                <p className='text-gray-400 text-sm'>Let's build something great together.</p>
            </div>
            <div className='flex gap-3 flex-wrap'>
                <Link to="/projects" className='button-white flex items-center gap-2'>
                    <FiArrowLeft /> All Projects
                </Link>
                <Link to="/services#inquiry" className='button-dark flex items-center gap-2'>
                    Start a Project <FiArrowUpRight size={16} />
                </Link>
            </div>
        </div>
    </section>
)

export default ProjectCTA
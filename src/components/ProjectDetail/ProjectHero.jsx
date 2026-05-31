import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiGithub } from 'react-icons/fi'
import { TbWorld } from 'react-icons/tb'
import { MdRadioButtonChecked } from 'react-icons/md'

const ProjectHero = ({ project }) => {
    const navigate = useNavigate()

    return (
        <section className='relative bg-black/95 py-20 px-10 pt-30 max-sm:px-4 overflow-hidden'>
            <div className='absolute w-[60%] h-[60%] top-[30%] left-[20%] blur-3xl bg-gray-400 opacity-5 pointer-events-none' />
            <div className='relative z-10 max-w-6xl mx-auto flex flex-col gap-8'>
                <button
                    onClick={() => navigate(-1)}
                    className='flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 w-fit'
                >
                    <FiArrowLeft size={16} /> Back to Projects
                </button>
                <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
                    <div className='flex flex-col gap-4'>
                        <p className='bg-white/5 border border-white/10 text-white py-2 px-5 rounded-full w-fit flex items-center gap-2 text-sm'>
                            <MdRadioButtonChecked /> {project.category}
                        </p>
                        <h1 className='text-6xl max-sm:text-4xl font-semibold leading-tight text-white'>
                            {project.title}
                        </h1>
                        <p className='text-gray-400 text-lg max-w-xl leading-8'>{project.tagline}</p>
                    </div>
                    <div className='flex gap-3 flex-wrap self-start md:self-end'>
                        <a href={project.liveUrl} target='_blank' rel='noreferrer'
                            className='button-dark flex items-center gap-2'>
                            Live Demo <TbWorld size={16} />
                        </a>
                        <a href={project.codeUrl} target='_blank' rel='noreferrer'
                            className='button-white flex items-center gap-2'>
                            View Code <FiGithub size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectHero
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TbWorld } from 'react-icons/tb'
import { FiGithub } from 'react-icons/fi'

const ProjectGrid = ({ projects }) => {
    const navigate = useNavigate()

    if (projects.length === 0) return (
        <div className='flex flex-col items-center justify-center py-32 gap-4'>
            <p className='text-white/30 text-lg'>No projects in this category yet.</p>
        </div>
    )

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative'>
            {/* Blur Background */}
            <div className='absolute w-[80%] h-[80%] top-[15%] left-[10%] blur-3xl bg-gray-300 opacity-50'></div>
            {projects.map((project, i) => (
                <div
                    key={project.id}
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className='group relative bg-black/60 border border-white/5 rounded-2xl overflow-hidden flex flex-col cursor-pointer
                        hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60
                        transition-all duration-500'
                >
                    {/* Image */}
                    <div className='relative overflow-hidden aspect-video'>
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-40'
                        />
                        {/* Hover overlay */}
                        <div className='absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
                            <span className='text-white font-semibold text-sm tracking-wide'>View Details</span>
                            <span className='w-5 h-px bg-white/40'></span>
                            <span className='text-white/40 text-xs'>Click to explore</span>
                        </div>
                        {/* Category badge */}
                        <span className='absolute top-3 left-3 bg-black/70 text-white/70 text-xs px-3 py-1 rounded-full border border-white/10'>
                            {project.category}
                        </span>
                    </div>

                    {/* Bottom */}
                    <div className='flex flex-col gap-2 p-4 border-t border-white/5 bg-black/60'>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-white font-medium text-sm'>{project.title}</h3>
                            <div className='flex gap-2' onClick={(e) => e.stopPropagation()}>
                                <a href={project.codeUrl} target='_blank' rel='noreferrer'
                                    className='text-white/30 hover:text-white transition-colors duration-200 p-1.5 rounded-lg border border-white/5 hover:border-white/20'>
                                    <FiGithub size={14} />
                                </a>
                                <a href={project.liveUrl} target='_blank' rel='noreferrer'
                                    className='text-white/30 hover:text-white transition-colors duration-200 p-1.5 rounded-lg border border-white/5 hover:border-white/20'>
                                    <TbWorld size={14} />
                                </a>
                            </div>
                        </div>
                        <p className='text-white/50 text-xs leading-5'>{project.description}</p>
                        <div className='flex flex-wrap gap-1.5 mt-1'>
                            {project.stack.map((s, j) => (
                                <span key={j} className='text-xs text-white/30 border border-white/10 hover:border-white/15 hover:text-white/40 px-2 py-0.5 rounded-full'>
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectGrid
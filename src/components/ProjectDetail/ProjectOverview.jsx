import React from 'react'

const ProjectOverview = ({ project }) => (
    <section className='bg-black/95 px-10 max-sm:px-4 py-16 border-t border-white/5'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <div className='lg:col-span-2 flex flex-col gap-4'>
                <p className='text-xs uppercase tracking-widest text-white/30'>Overview</p>
                <h2 className='text-3xl font-semibold text-white'>About this project</h2>
                <p className='text-gray-300 leading-8'>{project.description}</p>
            </div>
            <div className='flex flex-col gap-5'>
                <div>
                    <p className='text-xs uppercase tracking-widest text-white/30 mb-3'>Tech Stack</p>
                    <div className='flex flex-wrap gap-2'>
                        {project.stack.map((tech, i) => (
                            <span key={i} className='text-sm text-white/70 border border-white/10 bg-white/3 px-4 py-1.5 rounded-full'>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <p className='text-xs uppercase tracking-widest text-white/30 mb-3'>Key Features</p>
                    <div className='flex flex-col gap-2'>
                        {project.features.map((f, i) => (
                            <div key={i} className='flex items-start gap-3'>
                                <div className='w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0 mt-2' />
                                <span className='text-sm text-gray-300 leading-6'>{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default ProjectOverview
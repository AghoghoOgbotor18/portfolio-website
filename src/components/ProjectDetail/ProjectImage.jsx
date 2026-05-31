import React from 'react'

const ProjectImage = ({ project }) => {
    return (
    <section className='bg-black/95 px-10 max-sm:px-4 pb-16'>
        <div className='max-w-6xl mx-auto'>
            <div className='rounded-2xl overflow-hidden border border-white/5'>
                <img src={project.image} alt={project.title} className='w-full h-auto object-cover' />
            </div>
        </div>
    </section>
)

}
export default ProjectImage
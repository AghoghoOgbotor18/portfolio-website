import React from 'react'

const ProjectOutcome = ({ project }) => (
    <section className='px-10 max-sm:px-4 py-16 border-t border-white/5' style={{ background: "rgb(202, 202, 202)" }}>
        <div className='max-w-6xl mx-auto flex flex-col gap-4 max-w-3xl'>
            <p className='text-xs uppercase tracking-widest text-black/40'>Takeaway</p>
            <h2 className='text-3xl font-semibold text-black/90'>What I Took Away</h2>
            <p className='text-black/80 leading-8'>{project.outcome}</p>
        </div>
    </section>
)

export default ProjectOutcome
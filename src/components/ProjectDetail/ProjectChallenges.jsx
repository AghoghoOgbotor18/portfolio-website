import React from 'react'

const ProjectChallenges = ({ project }) => (
    <section className='bg-black/95 px-10 max-sm:px-4 py-16 border-t border-white/5'>
        <div className='max-w-6xl mx-auto flex flex-col gap-10'>
            <div className='flex flex-col gap-2'>
                <p className='text-xs uppercase tracking-widest text-white/30'>Problem Solving</p>
                <h2 className='text-3xl font-semibold text-white'>Challenges & Solutions</h2>
                <p className='text-gray-400 text-sm max-w-lg leading-7'>Every project hits walls. Here's how I worked through them.</p>
            </div>
            <div className='flex flex-col gap-4'>
                {project.challenges.map((c, i) => (
                    <div key={i} className='grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5'>
                        <div className='bg-rose-500/5 border-r border-white/5 p-6 flex flex-col gap-3'>
                            <span className='text-xs font-mono text-rose-400/60 uppercase tracking-widest'>Problem</span>
                            <h3 className='text-white font-semibold'>{c.title}</h3>
                            <p className='text-gray-300 text-sm leading-7'>{c.problem}</p>
                        </div>
                        <div className='bg-emerald-500/5 p-6 flex flex-col gap-3'>
                            <span className='text-xs font-mono text-emerald-400/60 uppercase tracking-widest'>Solution</span>
                            <p className='text-gray-300 text-sm leading-7'>{c.solution}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default ProjectChallenges
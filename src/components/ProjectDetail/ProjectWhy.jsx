import React from 'react'
import { HiLightBulb } from 'react-icons/hi'

const ProjectWhy = ({ project }) => (
    <section className='px-10 max-sm:px-4 py-16 border-t border-white/5' style={{ background: "rgb(202, 202, 202)" }}>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start'>
            <div className='flex-shrink-0 bg-black/80 border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 w-28 h-28 max-sm:hidden'>
                <HiLightBulb size={32} className='text-amber-400' />
                <span className='text-xs text-white/40 text-center'>Why I built this</span>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-xs uppercase tracking-widest text-black/40'>Motivation</p>
                <h2 className='text-3xl font-semibold text-black/90'>Why I Built This</h2>
                <p className='text-black/80 leading-8 max-w-2xl'>{project.why}</p>
            </div>
        </div>
    </section>
)

export default ProjectWhy
import React from 'react'
import { process } from './ServicesData'

const ServicesProcess = () => (
    <section
        className='px-10 max-sm:px-4 py-20 border-t border-white/5'
        style={{ background: "linear-gradient(0deg, rgba(0,0,0, 0.9) 15%, rgb(202, 202, 202) 100%)" }}
    >
        <div className='max-w-6xl mx-auto flex flex-col gap-12'>
            <div className='flex flex-col gap-2'>
                <p className='text-xs uppercase tracking-widest text-black/60'>How I Work</p>
                <h2 className='text-4xl font-semibold text-black/90'>My Process</h2>
                <p className='text-black/90 max-w-lg leading-7 text-sm mt-2'>
                    A simple, transparent workflow so you always know what's happening and what comes next.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {process.map((item, i) => (
                    <div key={i} className='relative flex flex-col gap-4 bg-black/60 border border-black/10 hover:border-black/25 hover:bg-black/45 rounded-2xl p-6 transition-all duration-300 group'>
                        <span className='text-4xl font-bold text-black/30 font-mono select-none group-hover:text-white transition-colors duration-300'>
                            {item.step}
                        </span>
                        <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
                        <p className='text-gray-400 text-sm leading-7'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default ServicesProcess
import React from 'react'
import { stack, extraStack } from './aboutData'

const AboutStack = () => (
    <section className='px-10 max-sm:px-4 py-16 border-t border-white/5'>
        <div className='max-w-6xl mx-auto flex flex-col gap-10'>
            <div className='flex flex-col gap-2'>
                <p className='text-xs uppercase tracking-widest text-white/30'>Tech Stack</p>
                <h2 className='text-4xl font-semibold'>Tools I work with</h2>
            </div>
            <div className='flex flex-wrap gap-3'>
                {stack.map((s, i) => (
                    <div key={i} className='flex items-center gap-3 bg-white/3 border border-white/5 hover:border-white/20 hover:bg-white/6 px-5 py-3 rounded-2xl transition-all duration-300 cursor-default'>
                        <span className='text-white/60'>{s.icon}</span>
                        <span className='text-sm text-white/80'>{s.name}</span>
                    </div>
                ))}
                {extraStack.map((t, i) => (
                    <div key={i} className='flex items-center gap-3 bg-white/3 border border-white/5 hover:border-white/20 px-5 py-3 rounded-2xl transition-all duration-300 cursor-default'>
                        <span className='text-sm text-white/50'>{t}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default AboutStack
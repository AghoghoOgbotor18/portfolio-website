import React from 'react'
import { stats } from './aboutData'

const AboutStats = () => (
    <section className='px-10 max-sm:px-4 py-12 border-y border-white/5'>
        <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6'>
            {stats.map((s, i) => (
                <div key={i} className='flex flex-col gap-1 bg-white/3 border border-white/5 rounded-2xl p-5 hover:border-white/15 transition-all duration-300'>
                    <h3 className='text-3xl font-bold text-white'>{s.value}</h3>
                    <p className='text-gray-500 text-sm'>{s.label}</p>
                </div>
            ))}
        </div>
    </section>
)

export default AboutStats
import React from 'react'
import { timeline } from './aboutData'

const AboutTimeline = () => (
    <section className='px-10 max-sm:px-4 py-20 border-t border-white/5'>
        <div className='max-w-6xl mx-auto flex flex-col gap-10'>
            <div className='flex flex-col gap-2'>
                <p className='text-xs uppercase tracking-widest text-white/30'>Journey</p>
                <h2 className='text-4xl font-semibold'>Education & Experience</h2>
            </div>
            <div className='flex flex-col gap-0'>
                {timeline.map((item, i) => (
                    <div key={i} className='flex gap-6 group'>
                        <div className='flex flex-col items-center'>
                            <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 border-2 transition-all duration-300
                                ${item.type === 'work'
                                    ? 'border-white bg-white group-hover:scale-125'
                                    : 'border-white/30 bg-transparent group-hover:border-white'}`}
                            />
                            {i < timeline.length - 1 && <div className='w-px flex-1 bg-white/5 my-1' />}
                        </div>
                        <div className='flex flex-col gap-1 pb-8'>
                            <span className='text-xs text-white/30 tracking-wider'>{item.year}</span>
                            <h4 className='font-semibold text-white'>{item.title}</h4>
                            <p className='text-sm text-gray-500'>{item.place}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default AboutTimeline
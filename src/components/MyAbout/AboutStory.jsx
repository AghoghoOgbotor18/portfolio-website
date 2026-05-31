import React from 'react'
import { values } from './Aboutdata'

const AboutStory = () => (
    <section className='px-10 max-sm:px-4 py-20' style={{ background: "linear-gradient(0deg, rgba(0,0,0, 0.2) 2%, rgba(202, 202, 202) 50%)" }}>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-16'>
            <div className='flex-1 flex flex-col gap-5'>
                <p className='text-xs uppercase tracking-widest text-black/70'>My Story</p>
                <h2 className='text-4xl font-semibold text-black'>How I got here</h2>
                <p className='text-black/90 leading-8'>
                    My journey into frontend development started with curiosity — a simple question of "how do websites actually work?" That curiosity turned into late nights with HTML and CSS, which turned into React projects, which turned into a genuine love for building things that people interact with every day.
                </p>
                <p className='text-black/90 leading-8'>
                    With a background in Computer Science and certifications across frontend technologies, I've spent the last year building real-world projects — from e-commerce stores to web applications — always with a focus on design quality and user experience.
                </p>
                <p className='text-black/90 leading-8'>
                    I'm currently pursuing my M.Sc in Computer Science at the University of Port Harcourt, deepening my technical foundation while continuing to grow as a developer through freelance work and personal projects.
                </p>
            </div>

            <div className='flex-1 flex flex-col gap-4'>
                <p className='text-xs uppercase tracking-widest text-black/70'>What I Stand For</p>
                {values.map((v, i) => (
                    <div key={i} className='flex flex-col gap-2 bg-black/10 border border-white/5 rounded-2xl p-5 hover:border-white/15 hover:-translate-y-0.5 transition-all duration-300'>
                        <h4 className='font-semibold text-black'>{v.title}</h4>
                        <p className='text-black/80 text-sm leading-7'>{v.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default AboutStory
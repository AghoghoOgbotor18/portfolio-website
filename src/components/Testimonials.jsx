import React, { useState } from 'react'
import { MdRadioButtonChecked } from 'react-icons/md'
import { HiStar } from 'react-icons/hi'
import { initialTestimonials } from './testimonialData'
import TestimonialCard from './TestimonialCard'
import TestimonialForm from './TestimonialForm'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState(initialTestimonials)

    const handleAdd = (newTestimonial) => {
        setTestimonials(prev => [newTestimonial, ...prev])
    }

    return (
        <section
            className='relative text-white py-20 px-10 max-sm:px-4 overflow-hidden'
            style={{ background: "linear-gradient(0deg, rgba(0,0,0, 0.9) 15%, rgb(202, 202, 202) 100%)" }}
        >
            {/* Decorative orbs */}
            <div className='absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/3 blur-3xl pointer-events-none' />
            <div className='absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-white/3 blur-3xl pointer-events-none' />

            <div className='relative z-10 max-w-6xl mx-auto flex flex-col gap-16'>

                {/* Header */}
                <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
                    <div className='flex flex-col gap-5'>
                        <p className='bg-black/95 text-white py-2 px-5 rounded-full w-fit flex items-center gap-2 text-sm shadow-black shadow-2xl'>
                            <MdRadioButtonChecked /> Testimonials
                        </p>
                        <h2 className='text-5xl max-sm:text-4xl font-semibold leading-tight text-black/80'>
                            Voices That <br />
                            <span className='text-black/90'>Trust My Work</span>
                        </h2>
                        <p className='text-black/90 max-w-md leading-7'>
                            Real words from real people. See what clients and collaborators have to say about working with me.
                        </p>
                    </div>
                    <div className='flex items-center gap-2 bg-black/60 border border-white/10 rounded-2xl px-5 py-3 w-fit self-start md:self-end'>
                        <HiStar className='text-amber-400' size={20} />
                        <span className='text-white font-semibold text-sm'>{testimonials.length} Reviews</span>
                    </div>
                </div>

                {/* Masonry cards */}
                <div className='columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5'>
                    {testimonials.map((t, i) => (
                        <div key={t.id} className='break-inside-avoid'>
                            <TestimonialCard t={t} index={i} />
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className='flex items-center gap-4'>
                    <div className='flex-1 h-px bg-white/10' />
                    <span className='text-white/20 text-xs tracking-widest uppercase'>Share Your Experience</span>
                    <div className='flex-1 h-px bg-white/10' />
                </div>

                {/* Form */}
                <TestimonialForm onAdd={handleAdd} />

            </div>
        </section>
    )
}

export default Testimonials
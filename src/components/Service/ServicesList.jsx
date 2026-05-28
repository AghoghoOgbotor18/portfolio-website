import React, { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { services } from './ServicesData'

const ServicesList = () => {
    const [hovered, setHovered] = useState(null)

    return (
        <section className='px-10 max-sm:px-4 py-20 bg-black/95'>
            <div className='max-w-6xl mx-auto flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <p className='text-xs uppercase tracking-widest text-white/30'>What I Offer</p>
                    <h2 className='text-4xl font-semibold text-white'>Services</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onMouseEnter={() => setHovered(service.id)}
                            onMouseLeave={() => setHovered(null)}
                            className={`relative flex flex-col gap-5 p-6 rounded-2xl border transition-all duration-500 cursor-default
                                ${hovered === service.id
                                    ? 'border-white/20 bg-white/8 -translate-y-1 shadow-2xl shadow-black/60'
                                    : 'border-white/5 bg-white/3'
                                }`}
                        >
                            <div className='flex justify-between items-start'>
                                <div className={`p-3 rounded-xl border transition-all duration-300
                                    ${hovered === service.id ? 'bg-white text-black border-white' : 'bg-white/5 text-white border-white/10'}`}>
                                    {service.icon}
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-lg font-semibold text-white'>{service.title}</h3>
                                <p className='text-gray-400 text-sm leading-7'>{service.description}</p>
                            </div>
                            <div className='flex flex-wrap gap-2 mt-auto'>
                                {service.tags.map((tag, i) => (
                                    <span key={i} className='text-xs text-white/40 border border-white/10 px-3 py-1 rounded-full'>{tag}</span>
                                ))}
                            </div>
                            <div className={`absolute top-5 right-5 transition-all duration-300
                                ${hovered === service.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                                <FiArrowUpRight size={18} className='text-white/40' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesList
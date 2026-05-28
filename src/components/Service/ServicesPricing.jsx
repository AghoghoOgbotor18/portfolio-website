import React from 'react'
import { Link } from 'react-router-dom'
import { FiCheck, FiArrowUpRight } from 'react-icons/fi'
import { pricing } from './ServicesData'

const ServicesPricing = () => (
    <section className='px-10 max-sm:px-4 py-20 border-t border-white/5 bg-black/95'>
        <div className='max-w-6xl mx-auto flex flex-col gap-12'>
            <div className='flex flex-col gap-2'>
                <p className='text-xs uppercase tracking-widest text-white/30'>Investment</p>
                <h2 className='text-4xl font-semibold text-white'>Pricing</h2>
                <p className='text-gray-400 max-w-lg leading-7 text-sm mt-2'>
                    Transparent pricing with no hidden fees. Every project is unique — these are starting points.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {pricing.map((p, i) => (
                    <div key={i} className={`relative flex flex-col gap-6 rounded-2xl p-7 border transition-all duration-300
                        ${p.highlight
                            ? 'bg-white text-black border-white shadow-2xl shadow-white/10 scale-105'
                            : 'bg-white/3 text-white border-white/5 hover:border-white/20'
                        }`}>
                        {p.highlight && (
                            <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-semibold px-4 py-1 rounded-full'>
                                Most Popular
                            </span>
                        )}
                        <div className='flex flex-col gap-1'>
                            <p className={`text-xs uppercase tracking-widest ${p.highlight ? 'text-black/40' : 'text-white/30'}`}>{p.plan}</p>
                            <h3 className={`text-4xl font-bold ${p.highlight ? 'text-black' : 'text-white'}`}>{p.price}</h3>
                            <p className={`text-sm leading-6 mt-1 ${p.highlight ? 'text-black/60' : 'text-gray-500'}`}>{p.description}</p>
                        </div>
                        <div className={`h-px ${p.highlight ? 'bg-black/10' : 'bg-white/5'}`} />
                        <div className='flex flex-col gap-3 flex-1'>
                            {p.features.map((f, j) => (
                                <div key={j} className='flex items-center gap-3'>
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
                                        ${p.highlight ? 'bg-black text-white' : 'bg-white/10 text-white/60'}`}>
                                        <FiCheck size={11} />
                                    </div>
                                    <span className={`text-sm ${p.highlight ? 'text-black/80' : 'text-gray-400'}`}>{f}</span>
                                </div>
                            ))}
                        </div>
                        <Link to="#inquiry"
                            className={`flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm transition-all duration-200
                                ${p.highlight
                                    ? 'bg-black text-white hover:bg-black/80'
                                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                                }`}>
                            {p.cta} <FiArrowUpRight size={14} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default ServicesPricing
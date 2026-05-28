import React, { useState } from 'react'
import { faqs } from './ServicesData'
import { FiPlus, FiMinus } from 'react-icons/fi'

const ServicesFAQ = () => {
    const [open, setOpen] = useState(null)

    return (
        <section
            className='px-10 max-sm:px-4 py-20 border-t border-white/5'
            style={{ background: "linear-gradient(180deg, rgba(0,0,0, 0.95) 0%, rgb(20,20,20) 100%)" }}
        >
            <div className='max-w-3xl mx-auto flex flex-col gap-12'>
                <div className='flex flex-col gap-2'>
                    <p className='text-xs uppercase tracking-widest text-white/30'>FAQ</p>
                    <h2 className='text-4xl font-semibold text-white'>Common Questions</h2>
                </div>
                <div className='flex flex-col gap-3'>
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300
                                ${open === i ? 'border-white/20 bg-white/5' : 'border-white/5 bg-white/3 hover:border-white/10'}`}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className='w-full flex justify-between items-center px-6 py-5 text-left gap-4'
                            >
                                <span className='text-white font-medium text-sm'>{faq.question}</span>
                                <span className='text-white/40 flex-shrink-0'>
                                    {open === i ? <FiMinus size={18} /> : <FiPlus size={18} />}
                                </span>
                            </button>
                            {open === i && (
                                <div className='px-6 pb-5'>
                                    <p className='text-gray-400 text-sm leading-7'>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesFAQ
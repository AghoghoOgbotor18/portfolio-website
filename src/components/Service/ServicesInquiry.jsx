import React, { useState } from 'react'
import { TbSend } from 'react-icons/tb'
import { MdRadioButtonChecked } from 'react-icons/md'

const serviceOptions = [
    "UI/UX Design", "React Development", "Responsive Design",
    "Landing Page", "CMS & E-Commerce", "Frontend Consulting"
]

const ServicesInquiry = () => {
    const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [focused, setFocused] = useState(null)

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required'
        if (!form.email.trim()) e.email = 'Email is required'
        if (!form.message.trim()) e.message = 'Tell me about your project'
        return e
    }

    const handleSubmit = () => {
        const e = validate()
        if (Object.keys(e).length) { setErrors(e); return }
        setSubmitted(true)
        setTimeout(() => { setSubmitted(false); setForm({ name: '', email: '', service: '', budget: '', message: '' }) }, 4000)
    }

    const inputBase = (field) => `w-full px-4 py-3 rounded-xl border text-sm text-white bg-white/5 outline-none transition-all duration-200 placeholder:text-white/20
        ${errors[field]
            ? 'border-rose-500/50 focus:border-rose-500'
            : focused === field ? 'border-white/30 ring-2 ring-white/5' : 'border-white/10 hover:border-white/20'
        }`

    return (
        <section
            id="inquiry"
            className='px-10 max-sm:px-4 py-20 border-t border-white/5 pb-40'
            style={{ background: "linear-gradient(0deg, rgba(0,0,0, 0.9) 15%, rgb(202, 202, 202) 100%)" }}
        >
            <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start'>

                {/* Left */}
                <div className='flex flex-col gap-6 flex-1'>
                    <p className='bg-black/95 text-white py-2 px-5 rounded-full w-fit flex items-center gap-2 text-sm shadow-black shadow-2xl'>
                        <MdRadioButtonChecked /> Start a Project
                    </p>
                    <h2 className='text-5xl max-sm:text-3xl font-semibold leading-tight text-black/90'>
                        Let's build <br />
                        <span className='text-black/80'>something great.</span>
                    </h2>
                    <p className='text-black/90 leading-8 max-w-sm'>
                        Have a project in mind? Fill in the form and I'll get back to you within 24 hours.
                    </p>
                    <div className='flex flex-col gap-3 mt-4'>
                        {[
                            { label: "Quick Response", desc: "I reply within 24 hours" },
                            { label: "Free Consultation", desc: "First call is always free" },
                            { label: "Flexible Workflow", desc: "We work the way that suits you" },
                        ].map((item, i) => (
                            <div key={i} className='flex items-center gap-4 bg-black/10 border border-black/10 rounded-2xl px-5 py-4'>
                                <div className='w-2 h-2 rounded-full bg-black/40 flex-shrink-0' />
                                <div>
                                    <p className='text-sm font-semibold text-black/80'>{item.label}</p>
                                    <p className='text-xs text-gray-500'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form */}
                <div className='flex-1 bg-black/60 border border-white/5 rounded-3xl p-8 max-sm:p-5 w-full'>
                    <div className='flex flex-col gap-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div className='flex flex-col gap-1.5'>
                                <label className='text-xs font-medium text-white/40 uppercase tracking-wider'>Your Name *</label>
                                <input type="text" placeholder="e.g. John Doe" value={form.name}
                                    onChange={e => { setForm(p => ({...p, name: e.target.value})); setErrors(p => ({...p, name: ''})) }}
                                    onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                                    className={inputBase('name')} />
                                {errors.name && <p className='text-xs text-rose-400'>{errors.name}</p>}
                            </div>
                            <div className='flex flex-col gap-1.5'>
                                <label className='text-xs font-medium text-white/40 uppercase tracking-wider'>Email *</label>
                                <input type="email" placeholder="you@example.com" value={form.email}
                                    onChange={e => { setForm(p => ({...p, email: e.target.value})); setErrors(p => ({...p, email: ''})) }}
                                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                                    className={inputBase('email')} />
                                {errors.email && <p className='text-xs text-rose-400'>{errors.email}</p>}
                            </div>
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <label className='text-xs font-medium text-white/40 uppercase tracking-wider'>Service Needed</label>
                            <select value={form.service} onChange={e => setForm(p => ({...p, service: e.target.value}))}
                                onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}
                                className={`${inputBase('service')} cursor-pointer`}>
                                <option value="" className='bg-black'>Select a service</option>
                                {serviceOptions.map((s, i) => <option key={i} value={s} className='bg-black'>{s}</option>)}
                            </select>
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <label className='text-xs font-medium text-white/40 uppercase tracking-wider'>Budget Range</label>
                            <select value={form.budget} onChange={e => setForm(p => ({...p, budget: e.target.value}))}
                                onFocus={() => setFocused('budget')} onBlur={() => setFocused(null)}
                                className={`${inputBase('budget')} cursor-pointer`}>
                                <option value="" className='bg-black'>Select a range</option>
                                {["Under ₦80,000", "₦80,000 – ₦200,000", "₦200,000 – ₦500,000", "₦500,000+", "Let's discuss"].map((b, i) => (
                                    <option key={i} value={b} className='bg-black'>{b}</option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col gap-1.5'>
                            <label className='text-xs font-medium text-white/40 uppercase tracking-wider'>Project Details *</label>
                            <textarea rows={4} placeholder="Tell me about your project, goals, and timeline..."
                                value={form.message}
                                onChange={e => { setForm(p => ({...p, message: e.target.value})); setErrors(p => ({...p, message: ''})) }}
                                onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                                className={`${inputBase('message')} resize-none`} />
                            {errors.message && <p className='text-xs text-rose-400'>{errors.message}</p>}
                        </div>

                        <button onClick={handleSubmit}
                            className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300
                                ${submitted
                                    ? 'bg-emerald-500 text-white scale-95'
                                    : 'bg-white text-black hover:bg-gray-200 hover:-translate-y-0.5 active:scale-95'
                                }`}>
                            {submitted ? <>✓ Message Sent! I'll be in touch soon.</> : <>Send Message <TbSend size={16} /></>}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesInquiry
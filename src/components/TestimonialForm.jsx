import React, { useState } from 'react'
import { TbSend } from 'react-icons/tb'
import StarRating from './StarRating'
import { avatarColors } from './testimonialData'

const TestimonialForm = ({ onAdd }) => {
    const [form, setForm] = useState({ name: '', role: '', message: '', rating: 5 })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [focused, setFocused] = useState(null)

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required'
        if (!form.message.trim() || form.message.trim().length < 20) e.message = 'Please write at least 20 characters'
        return e
    }

    const handleSubmit = () => {
        const e = validate()
        if (Object.keys(e).length) { setErrors(e); return }

        const initials = form.name.trim().split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
        const color = avatarColors[Math.floor(Math.random() * avatarColors.length)]

        onAdd({
            id: Date.now(),
            name: form.name.trim(),
            role: form.role.trim() || 'Client',
            message: form.message.trim(),
            rating: form.rating,
            initials,
            color,
        })

        setForm({ name: '', role: '', message: '', rating: 5 })
        setErrors({})
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    const inputBase = (field) => `w-full px-4 py-3 rounded-xl border text-sm text-white bg-white/5 outline-none transition-all duration-200 placeholder:text-white/20
        ${errors[field]
            ? 'border-rose-500/50 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10'
            : focused === field
                ? 'border-white/30 ring-2 ring-white/5'
                : 'border-white/10 hover:border-white/20'
        }`

    return (
        <div className='bg-black/70 border border-white/5 rounded-3xl p-8 max-sm:p-5 max-w-2xl mx-auto w-full'>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-xl font-semibold text-white'>Leave a Testimonial</h3>
                    <p className='text-gray-400 text-sm'>Worked with me? I'd love to hear from you.</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-xs font-medium text-white/40 uppercase tracking-wider'>Your Name *</label>
                        <input
                            type="text"
                            placeholder="e.g. Sarah Mitchell"
                            value={form.name}
                            onChange={e => { setForm(p => ({...p, name: e.target.value})); setErrors(p => ({...p, name: ''})) }}
                            onFocus={() => setFocused('name')}
                            onBlur={() => setFocused(null)}
                            className={inputBase('name')}
                        />
                        {errors.name && <p className='text-xs text-rose-400'>{errors.name}</p>}
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-xs font-medium text-white/40 uppercase tracking-wider'>Role / Company</label>
                        <input
                            type="text"
                            placeholder="e.g. Startup Founder"
                            value={form.role}
                            onChange={e => setForm(p => ({...p, role: e.target.value}))}
                            onFocus={() => setFocused('role')}
                            onBlur={() => setFocused(null)}
                            className={inputBase('role')}
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-1.5'>
                    <label className='text-xs font-medium text-white/40 uppercase tracking-wider'>Your Rating</label>
                    <StarRating rating={form.rating} setRating={(r) => setForm(p => ({...p, rating: r}))} interactive />
                </div>

                <div className='flex flex-col gap-1.5'>
                    <label className='text-xs font-medium text-white/40 uppercase tracking-wider'>Your Message *</label>
                    <textarea
                        rows={4}
                        placeholder="Tell others about your experience working with Aghogho..."
                        value={form.message}
                        onChange={e => { setForm(p => ({...p, message: e.target.value})); setErrors(p => ({...p, message: ''})) }}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className={`${inputBase('message')} resize-none`}
                    />
                    <div className='flex justify-between items-center'>
                        {errors.message
                            ? <p className='text-xs text-rose-400'>{errors.message}</p>
                            : <span />
                        }
                        <span className={`text-xs ml-auto ${form.message.length < 20 ? 'text-white/20' : 'text-emerald-400'}`}>
                            {form.message.length} / 20 min
                        </span>
                    </div>
                </div>

                <button
                    onClick={handleSubmit}
                    className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300
                        ${submitted
                            ? 'bg-emerald-500 text-white scale-95'
                            : 'bg-white text-black hover:bg-gray-200 hover:-translate-y-0.5 active:scale-95'
                        }`}
                >
                    {submitted ? <>✓ Testimonial Added!</> : <>Submit Testimonial <TbSend size={16} /></>}
                </button>
            </div>
        </div>
    )
}

export default TestimonialForm
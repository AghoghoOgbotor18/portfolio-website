import React, { useState, useRef, useEffect } from 'react'
import { MdFormatQuote } from 'react-icons/md'
import StarRating from './StarRating'

const TestimonialCard = ({ t, index }) => {
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.15 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${index * 80}ms` }}
            className={`group flex flex-col gap-4 bg-black/70 border border-white/5 rounded-3xl p-6
                hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/80 hover:bg-black/80
                transition-all duration-500
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
        >
            <MdFormatQuote size={32} className="text-white/10 -mb-2" />
            <p className="text-gray-400 text-sm leading-7 flex-1">"{t.message}"</p>
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${t.color}`}>
                        {t.initials}
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                </div>
                <StarRating rating={t.rating} />
            </div>
        </div>
    )
}

export default TestimonialCard
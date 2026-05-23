import React from 'react'
import { HiStar } from 'react-icons/hi'

const StarRating = ({ rating, setRating, interactive = false }) => (
    <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
            <HiStar
                key={star}
                size={interactive ? 24 : 16}
                onClick={() => interactive && setRating(star)}
                className={`transition-colors duration-200
                    ${star <= rating ? 'text-amber-400' : 'text-white/15'}
                    ${interactive ? 'cursor-pointer hover:text-amber-300' : ''}
                `}
            />
        ))}
    </div>
)

export default StarRating
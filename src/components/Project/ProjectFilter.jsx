import React from 'react'
import { categories } from './ProjectPageData'

const ProjectFilter = ({ active, setActive }) => {
    return (
        <div className='bg-black sticky top-0 z-30 py-6 px-10 max-sm:px-4 border-b border-white/5'>

            <div className='max-w-7xl mx-auto flex flex-wrap gap-3'>

                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`
                            px-5 py-2.5 rounded-full text-sm
                            transition-all duration-300

                            ${active === cat
                                ? "bg-[rgb(202,202,202)] text-black font-medium"
                                : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                            }
                        `}
                    >
                        {cat}
                    </button>
                ))}

            </div>

        </div>
    )
}

export default ProjectFilter
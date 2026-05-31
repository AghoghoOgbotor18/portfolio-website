import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCTA = () => {
    return (
        <section
            className='py-28 px-10 max-sm:px-4'
            style={{
                background: "rgb(202,202,202)"
            }}
        >

            <div className='max-w-6xl mx-auto text-center'>

                <p className='uppercase tracking-[0.3em] text-black/50 text-xs'>
                    Let's Build Something
                </p>

                <h2 className='text-6xl max-sm:text-4xl font-semibold text-black mt-6'>
                    Have an idea worth building?
                </h2>

                <p className='text-black/60 max-w-xl mx-auto mt-5 leading-8'>
                    I'm available for freelance projects, internships,
                    startup collaborations and product design work.
                </p>

                <div className='mt-10 flex justify-center gap-4 flex-wrap'>

                    <Link
                        to="/about"
                        className='px-7 py-3 rounded-full border border-black/10 text-black hover:bg-black hover:text-white transition'
                    >
                        About Me
                    </Link>

                    <Link
                        to="/services#inquiry"
                        className='px-7 py-3 rounded-full bg-black text-white hover:scale-105 transition'
                    >
                        Start a Project
                    </Link>

                </div>

            </div>

        </section>
    )
}

export default ProjectCTA
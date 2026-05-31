import React from 'react'

const ProjectHero = ({ total }) => {
    return (
        <section className="bg-black px-10 max-sm:px-4 py-28 border-b border-white/5">
            <div className="max-w-7xl mx-auto">

                <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Selected Work
                </span>

                <h1 className="text-7xl max-sm:text-5xl font-semibold mt-6 max-w-4xl leading-tight text-white">
                    Building products that solve real problems.
                </h1>

                <div className="flex flex-col md:flex-row md:items-center gap-8 mt-12">

                    <div>
                        <h2 className="text-5xl font-bold text-[rgb(202,202,202)]">
                            {total}
                        </h2>
                        <p className="text-white/40 text-sm">
                            Projects Completed
                        </p>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-white/10"></div>

                    <p className="text-white/50 max-w-lg leading-8">
                        Frontend applications, AI products, dashboards,
                        e-commerce platforms and digital experiences built
                        with performance and usability in mind.
                    </p>

                </div>

            </div>
        </section>
    )
}

export default ProjectHero
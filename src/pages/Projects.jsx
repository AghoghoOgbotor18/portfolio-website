import React, { useEffect, useState } from 'react'
import { allProjects } from '../components/Project/ProjectPageData'
import ProjectsHero from '../components/Project/ProjectsHero'
import ProjectsFilter from '../components/Project/ProjectFilter'
import ProjectsGrid from '../components/Project/ProjectGrid'
import ProjectsCTA from '../components/Project/ProjectCTA'

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All")

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])

    const filtered = activeCategory === "All"
        ? allProjects
        : allProjects.filter(p => p.category === activeCategory)

    return (
      <main className="bg-black min-h-screen">
        <ProjectsHero total={allProjects.length} />

        <ProjectsFilter
            active={activeCategory}
            setActive={setActiveCategory}
        />

        <section className="px-10 max-sm:px-4 py-20">
            <div className="max-w-7xl mx-auto">
                <ProjectsGrid projects={filtered} />
            </div>
        </section>

        <ProjectsCTA />
      </main>
    )
}

export default Projects
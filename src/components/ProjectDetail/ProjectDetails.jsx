import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { projects } from './ProjectData'
import ProjectHero from './ProjectHero'
import ProjectImage from './ProjectImage'
import ProjectOverview from './ProjectOverview'
import ProjectWhy from './ProjectWhy'
import ProjectChallenges from './ProjectChallenges'
import ProjectOutcome from './ProjectOutcome'
import ProjectCTA from './ProjectCTA'

const ProjectDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])

    const project = projects.find(p => p.id === parseInt(id))

    if (!project) return (
        <div className='min-h-screen bg-black/95 text-white flex flex-col items-center justify-center gap-4'>
            <p className='text-gray-400'>Project details not found.</p>
            <Link to="/projects" className='button-white'>Back to Projects</Link>
        </div>
    )

    return (
        <main className="text-white min-h-screen">
            <ProjectHero project={project} />
            <ProjectImage project={project} />
            <ProjectOverview project={project} />
            <ProjectWhy project={project} />
            <ProjectChallenges project={project} />
            <ProjectOutcome project={project} />
            <ProjectCTA />
        </main>

    )
}

export default ProjectDetails
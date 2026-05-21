import React from 'react'
import { Link } from 'react-router-dom'
import {MdRadioButtonChecked} from "react-icons/md"
import {FiArrowUpRight} from "react-icons/fi"
import ProjectCard from './ProjectCard'

const Project = () => {
    return (
        <section className='px-10 py-8 max-sm:px-4' style={{background: "linear-gradient(0deg, rgba(0,0,0, 0.9) 15%, rgb(202, 202, 202) 100%)"}}>
            <div className='flex flex-col gap-8 items-start md:justify-center md:items-center'>
                <p className='bg-black/95 text-white py-2 px-7 rounded-4xl w-fit flex justify-center items-center gap-1 shadow-black shadow-2xl'>
                    <MdRadioButtonChecked /> Projects
                </p>
                <div className='flex flex-col md:flex-row gap-7 md:justify-between w-full'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-5xl flex justify-start md:justify-center items-center gap-2'>
                            Recent Projects
                            <FiArrowUpRight size={35} className="bg-black text-white rounded-full p-2" />
                        </h3>
                        <p>Showcase of some of my recent sleek websites</p>
                    </div>
                    <div className='flex flex-col md:flex-row items-start md:justify-center md:items-center gap-4'>
                        <Link to="/projects" className='button-dark flex justify-center max-sm:w-60'>See All Projects</Link>
                        <Link to="#" className='button-white flex justify-center max-sm:w-60'>Contact Now</Link>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-8'>
                <ProjectCard />
            </div>
        </section>
    )
}

export default Project
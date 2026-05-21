import React from 'react'
import { Link } from 'react-router'
import ponytelle from "../assets/ponnytelle.png"
import riyans from "../assets/riyans.png"
import aippt from "../assets/aippt.png"
import salarySplit from "../assets/salary-spliter.png"
import shopbuy from "../assets/shopbuy.png"
import nairabank from "../assets/nairabank.png"

const projects = [
    { id: 1, image: ponytelle, title: "Ponytelle", span: "md:col-span-2" },
    { id: 2, image: riyans, title: "Riyans", span: "md:col-span-1" },
    { id: 3, image: aippt, title: "AI PPT", span: "md:col-span-1" },
    { id: 4, image: salarySplit, title: "Salary Splitter", span: "md:col-span-2" },
    { id: 5, image: shopbuy, title: "ShopBuy", span: "md:col-span-1" },
    { id: 6, image: nairabank, title: "NairaBank", span: "md:col-span-1" },
    { id: 7, image: riyans, title: "Riyans", span: "md:col-span-1" },
]

const ProjectCard = () => {
    return (
        <>
            {projects.map((project) => (
                <div className={`group relative bg-black/90 p-3 rounded-2xl overflow-hidden border border-white/5 ${project.span} flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60`}
                >

                    <div className="overflow-hidden w-full flex-1 min-h-0 rounded-lg">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex justify-between items-center py-3 border-t border-white/5">
                        <span className="text-white/60 text-sm tracking-wide">{project.title}</span>
                        <div className="flex gap-2">
                            <Link
                                to=""
                                className="text-xs text-white/50 hover:text-white border border-white/10 hover:border-white/30 py-3 px-4 rounded-lg transition-all duration-200"
                            >
                                View Code
                            </Link>
                            <Link
                                to={`/projects/${project.id}`}
                                className="text-xs text-black font-semibold button-white rounded-lg transition-all duration-200"
                            >
                                Project Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProjectCard
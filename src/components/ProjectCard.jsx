import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ponytelle from "../assets/ponytelle.webp"
import riyans from "../assets/riyans.webp"
import aippt from "../assets/aippt.webp"
import salarySplit from "../assets/salary-spliter.webp"
import shopbuy from "../assets/shopbuy.webp"
import nairabank from "../assets/nairabank.webp"
import hospitality from "../assets/hospitality.webp"

const projects = [
    { id: 1, image: ponytelle,   title: "Ponytelle",       code: "#", demo: "#", span: "md:col-span-2" },
    { id: 2, image: riyans,      title: "Riyans",          code: "#", demo: "#", span: "md:col-span-1" },
    { id: 3, image: aippt,       title: "AI PPT",          code: "#", demo: "#", span: "md:col-span-1" },
    { id: 4, image: salarySplit, title: "Salary Splitter",  code: "#", demo: "#", span: "md:col-span-2" },
    { id: 5, image: shopbuy,     title: "ShopBuy",         code: "#", demo: "#", span: "md:col-span-1" },
    { id: 6, image: nairabank,   title: "NairaBank",       code: "#", demo: "#", span: "md:col-span-1" },
    { id: 7, image: hospitality, title: "Hospitality",     code: "#", demo: "#", span: "md:col-span-1" },
]

const ProjectCard = () => {
    const navigate = useNavigate()

    return (
        <>
            {projects.map((project) => (
                <div
                    key={project.id}
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className={`group relative bg-black/90 p-3 rounded-2xl overflow-hidden border border-white/5 ${project.span}
                        flex flex-col justify-between cursor-pointer
                        transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60`}
                >
                    {/* Image + hover overlay */}
                    <div className="relative overflow-hidden w-full flex-1 min-h-0 rounded-lg">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full transition-all duration-500 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-40"
                        />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <span className="text-white font-semibold text-base tracking-wide">View Project Details</span>
                            <span className="w-6 h-px bg-white/40"></span>
                            <span className="text-white/40 text-xs">Click to explore</span>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex justify-between items-center py-3 border-t border-white/5">
                        <span className="text-white/60 text-sm tracking-wide">{project.title}</span>
                        <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                            <Link
                                to={project.code}
                                className="text-xs text-white/50 hover:text-white border border-white/10 hover:border-white/30 py-3 px-4 rounded-lg transition-all duration-200"
                            >
                                View Code
                            </Link>
                            <Link
                                to={project.demo}
                                className="text-xs text-black font-semibold button-white rounded-lg transition-all duration-200"
                            >
                                Live Demo
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProjectCard
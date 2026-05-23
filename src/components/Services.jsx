import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdRadioButtonChecked } from "react-icons/md"
import { FiArrowUpRight } from "react-icons/fi"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2"
import { TbLayoutDashboard, TbBrandReact, TbPalette, TbWorldWww, TbShoppingCart } from "react-icons/tb"

const services = [
    {
        id: "01",
        icon: <TbLayoutDashboard size={28} />,
        title: "UI/UX Design",
        description: "Crafting clean, intentional interfaces that feel modern and well thought out. Every pixel has a purpose.",
        tags: ["Figma", "Wireframing", "Prototyping"],
        accent: "from-white/5 to-white/0",
        highlight: false,
    },
    {
        id: "02",
        icon: <TbBrandReact size={28} />,
        title: "React Development",
        description: "Building fast, scalable React applications with clean component architecture and smooth user experiences.",
        tags: ["ReactJS", "JavaScript", "TailwindCSS"],
        accent: "from-white/10 to-white/0",
        highlight: true,
    },
    {
        id: "03",
        icon: <HiOutlineDevicePhoneMobile size={28} />,
        title: "Responsive Design",
        description: "Pixel-perfect layouts that look and feel great on every screen — from mobile to widescreen.",
        tags: ["Mobile First", "CSS Grid", "Flexbox"],
        accent: "from-white/5 to-white/0",
        highlight: false,
    },
    {
        id: "04",
        icon: <TbWorldWww size={28} />,
        title: "Landing Pages",
        description: "High-converting landing pages that capture attention, communicate value, and drive action.",
        tags: ["HTML", "CSS", "Performance"],
        accent: "from-white/5 to-white/0",
        highlight: false,
    },
    {
        id: "05",
        icon: <TbShoppingCart size={28} />,
        title: "CMS & E-Commerce",
        description: "Shopify and WordPress setups tailored to your brand — beautiful storefronts that sell.",
        tags: ["Shopify", "WordPress", "WooCommerce"],
        accent: "from-white/5 to-white/0",
        highlight: false,
    },
    {
        id: "06",
        icon: <TbPalette size={28} />,
        title: "Frontend Consulting",
        description: "Code reviews, architecture advice, and hands-on help to level up your existing frontend projects.",
        tags: ["Code Review", "Mentorship", "Best Practices"],
        accent: "from-white/5 to-white/0",
        highlight: false,
    },
]

const Services = () => {
    const [hovered, setHovered] = useState(null)

    return (
        <section className='relative bg-black/95 text-white py-20 px-10 max-sm:px-4 overflow-hidden'>

            {/* Background blur */}
            <div className='absolute w-[60%] h-[60%] top-[20%] left-[20%] blur-3xl bg-gray-400 opacity-5 pointer-events-none'></div>

            <div className='relative z-10 max-w-6xl mx-auto flex flex-col gap-14'>

                <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
                    <div className='flex flex-col gap-5'>
                        <p className='bg-white/5 border border-white/10 text-white py-2 px-5 rounded-full w-fit flex items-center gap-2 text-sm'>
                            <MdRadioButtonChecked className='text-white' /> Services
                        </p>
                        <h2 className='text-5xl max-sm:text-4xl font-semibold leading-tight'>
                            What I Can <br />
                            <span className='text-gray-400'>Do For You</span>
                        </h2>
                        <p className='text-gray-400 max-w-md leading-7'>
                            From concept to code — I help turn your ideas into polished digital experiences that leave a lasting impression.
                        </p>
                    </div>
                    <Link
                        to="#"
                        className='button-white flex items-center gap-2 w-fit max-sm:w-60 justify-center self-start md:self-end'
                    >
                        Contact Now <FiArrowUpRight size={16} />
                    </Link>
                </div>

                {/* Services Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onMouseEnter={() => setHovered(service.id)}
                            onMouseLeave={() => setHovered(null)}
                            className={`relative group flex flex-col gap-5 p-6 rounded-2xl border transition-all duration-500 cursor-default overflow-hidden
                                ${hovered === service.id
                                    ? 'border-white/20 bg-white/8 -translate-y-1 shadow-2xl shadow-black/60'
                                    : 'border-white/5 bg-white/3'
                                }
                                ${service.highlight ? 'md:col-span-1' : ''}
                            `}
                        >
                            {/* Top row */}
                            <div className={`w-fit p-3 rounded-xl border transition-all duration-300
                                    ${hovered === service.id ? 'bg-white text-black border-white' : 'bg-white/5 text-white border-white/10'}`}
                                >
                                {service.icon}
                            </div>
                                

                            {/* Text */}
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-xl font-semibold text-white'>{service.title}</h3>
                                <p className='text-gray-400 text-sm leading-7'>{service.description}</p>
                            </div>

                            {/* Tags */}
                            <div className='flex flex-wrap gap-2 mt-auto'>
                                {service.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className='text-xs text-white/40 border border-white/10 px-3 py-1 rounded-full'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Hover arrow */}
                            <div className={`absolute top-5 right-5 transition-all duration-300
                                ${hovered === service.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                            >
                                <FiArrowUpRight size={18} className='text-white/40' />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA strip */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 rounded-2xl px-8 py-6 bg-white/3'>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-xl font-semibold'>Got a project in mind?</h4>
                        <p className='text-gray-400 text-sm'>Let's build something great together.</p>
                    </div>
                    <div className='flex gap-3 flex-wrap'>
                        <Link to="#" className='button-dark flex items-center gap-2 justify-center'>
                            Start a Project <FiArrowUpRight size={16} />
                        </Link>
                        <Link to="/projects" className='button-white flex items-center gap-2 justify-center'>
                            View My Work
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services
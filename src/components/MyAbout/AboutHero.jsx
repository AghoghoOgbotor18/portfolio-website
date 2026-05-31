import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiRadio } from 'react-icons/fi'
import { FaLinkedin, FaFacebook, FaTiktok, FaPhone } from 'react-icons/fa'
import { MdRadioButtonChecked } from 'react-icons/md'
import { HiDownload } from 'react-icons/hi'
import userPhoto from "../../assets/Aghogho-photo.webp"

const AboutHero = () => (
    <section className='relative overflow-hidden py-24 px-10 max-sm:px-4'>
        <div className='absolute w-[60%] h-[60%] top-[10%] left-[20%] blur-3xl bg-gray-400 opacity-5 pointer-events-none' />
        <div className='relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center'>

            {/* Text */}
            <div className='flex flex-col gap-7 flex-1'>
                <p className='bg-white/5 border border-white/10 text-white py-2 px-5 rounded-full w-fit flex items-center gap-2 text-sm'>
                    <MdRadioButtonChecked /> About Me
                </p>
                <h1 className='text-5xl md:text-6xl font-semibold leading-tight'>
                    I build things <br />
                    <span className='text-gray-300'>for the web.</span>
                </h1>
                <p className='text-gray-300 leading-8 max-w-lg'>
                    I'm Aghogho Ogbotor — a frontend developer based in Nigeria with a passion for crafting clean, intentional digital experiences. I care deeply about the details that make a product feel polished and alive.
                </p>
                <p className='text-gray-300 leading-8 max-w-lg'>
                    When I'm not pushing pixels, I'm studying computer science, exploring new frontend technologies, or helping other developers level up their skills.
                </p>
                <div className='flex flex-wrap gap-3'>
                    <Link to="/projects" className='button-dark flex items-center gap-2'>
                        View My Work <FiArrowUpRight size={16} />
                    </Link>
                    <button className='button-white flex items-center gap-2'>
                        Download CV <HiDownload size={16} />
                    </button>
                </div>
                <div className='flex gap-3 flex-wrap'>
                    {[
                        { icon: <FaLinkedin />, label: "LinkedIn" },
                        { icon: <FaFacebook />, label: "Facebook" },
                        { icon: <FaTiktok />, label: "TikTok" },
                        { icon: <FaPhone />, label: "Phone" },
                    ].map((s, i) => (
                        <Link key={i} to="#"
                            className='flex items-center gap-2 text-sm text-white/50 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-xl transition-all duration-200'>
                            {s.icon} {s.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Photo */}
            <div className='relative flex-shrink-0'>
                <div className='w-72 h-80 rounded-3xl overflow-hidden border border-white/10'>
                    <img src={userPhoto} alt="Aghogho" className='w-full h-full object-cover' />
                </div>
                <div className='absolute -bottom-4 -left-4 bg-black/80 border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-2'>
                    <FiRadio className='text-green-400 animate-pulse' />
                    <span className='text-green-400 text-sm'>Available for work</span>
                </div>
            </div>
        </div>
    </section>
)

export default AboutHero
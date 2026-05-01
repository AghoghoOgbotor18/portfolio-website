import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const Home = () => {
    return (
      <section className='container mx-auto py-20'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <p className='py-1 px-3 bg-blue-500 text-black text-sm rounded-xl shadow-2xl'>
            Available for Work
          </p>
          <div className='text-4xl md:text-5xl text-center md:leading-14 px-0.5'>
            <h1 className='font-bold'>I'm <span className='font-medium'>Aghogho,</span></h1>
            <h1 className='font-medium'>a <span className='font-bold'>Frontend Developer based in Nigeria</span></h1>
          </div>
          <p className='font-bold md:w-[50%] text-center'>
            I design clean, visually confident interfaces that help digital products feel intentional, modern, and well put together
          </p>
          <div className='flex justify-center items-center gap-5'>
            <button className='button-dark flex justify-center items-center gap-1.5 hover:bg-black cursor-pointer'>
              Contact Me
              <FiArrowUpRight size={22} className='bg-white text-black rounded-full p-1' />
            </button>
            <button className='button-white hover:bg-gray-300/90 cursor-pointer'>View Works</button>
          </div>
        </div>
      </section>
    )
}

export default Home

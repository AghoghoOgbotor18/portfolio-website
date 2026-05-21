import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router'
import React from 'react'

const Whatsapp = () => {
    return (
        <div className='fixed right-4 bottom-5 flex justify-center items-center bg-green-700 rounded-full w-15 h-15 animate-pulse z-1000'>
            <Link to="https://wa.me/2348168973060" target='_blank'><FaWhatsapp size={35} className='text-white'/></Link>
        </div>
    )
}

export default Whatsapp

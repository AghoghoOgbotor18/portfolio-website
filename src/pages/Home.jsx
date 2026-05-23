import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router'
import WhatsappLink from '../components/WhatsappLink'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

const Home = () => {
    return (
      <>
        <Hero />
        <AboutMe />
        <Project />
        <WhatsappLink />
        <Services />
        <Testimonial />
      </>
    )
}

export default Home

import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router'
import WhatsappLink from '../components/WhatsappLink'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {

    useEffect(() => {
      scrollTo({top: 0, behavior: "smooth"})
    }, []);

    return (
      <>
        <Hero />
        <AboutMe />
        <Project />
        <Services />
        <Testimonials />
      </>
    )
}

export default Home

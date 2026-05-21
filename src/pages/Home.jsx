import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router'
import WhatsappLink from '../components/WhatsappLink'

const Home = () => {
    return (
      <>
        <Hero />
        <AboutMe />
        <Project />
        <WhatsappLink />
      </>
    )
}

export default Home

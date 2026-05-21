import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router'
import Whatsapp from '../components/whatsapp'

const Home = () => {
    return (
      <>
        <Hero />
        <AboutMe />
        <Project />
        <Whatsapp />
      </>
    )
}

export default Home

import React, { useEffect } from 'react'
import AboutHero from '../components/MyAbout/AboutHero'
import AboutStats from '../components/MyAbout/AboutStats'
import AboutStory from '../components/MyAbout/AboutStory'
import AboutStack from '../components/MyAbout/AboutStack'
import AboutTimeline from '../components/MyAbout/AboutTimeline'
import AboutCTA from '../components/MyAbout/AboutCTA'

const About = () => {

  useEffect(() => {
    scrollTo({top: 0, behavior: "smooth"})
  }, [])

  return (
    <main className='bg-black/95 text-white min-h-screen py-20'>
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutStack />
      <AboutTimeline />
      <AboutCTA />
    </main>
  )
}

export default About

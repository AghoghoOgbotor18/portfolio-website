import React from 'react'
import AboutHero from '../components/MyAbout/AboutHero'
import AboutStats from '../components/MyAbout/Aboutstats'
import AboutStory from '../components/MyAbout/Aboutstory'
import AboutStack from '../components/MyAbout/Aboutstack'
import AboutTimeline from '../components/MyAbout/Abouttimeline'
import AboutCTA from '../components/MyAbout/Aboutcta'

const About = () => {
  return (
    <main className='bg-black/95 text-white min-h-screen'>
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

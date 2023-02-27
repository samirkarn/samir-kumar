import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg1 from '../components/HeroImg1'
import AboutContent from '../components/AboutContent'
import Skills from '../components/Skills'

const About = () => {
  return (
    <>
      <Navbar />
      <HeroImg1 heading="<ABOUT. />" details="Some Details about me"/>
      <AboutContent />
      <Skills />
      <Footer /> 
    </>
  )
}

export default About
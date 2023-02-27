import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Project from '../components/Project'
import AboutContent from '../components/AboutContent'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutContent />
      <Project />
      <Footer />
    </>
    )
}

export default Home;
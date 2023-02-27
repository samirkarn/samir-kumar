import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg1 from '../components/HeroImg1'
import Project from '../components/Project'
import Technology from '../components/Technology'


const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg1 heading="<PROJECTS. />" details="Some of most recent projects" />
      <Project />
      <Technology />
      <Footer />
    </div>
  )
}

export default Projects
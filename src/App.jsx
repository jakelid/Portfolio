import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Coursework from './sections/Coursework.jsx'

export default function App(){
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Coursework />
      <Footer />
    </div>
  )
}

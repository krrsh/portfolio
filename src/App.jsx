import React from 'react'
import Hero from './Components/heroSection/Hero'
import './App.css'
import Projects from './Components/projectsSection/Projects'
import Skills from './Components/Skills/Skills'
import Contact from './Components/contact/Contact'


const App = () => {
  return (
    <>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
    </>
  )
}

export default App

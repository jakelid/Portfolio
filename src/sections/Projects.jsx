import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import list from '../data/projects.js'

export default function Projects(){
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <p className="muted">A few favorites with concise writeups. Code links included.</p>
        <div className="cards">
          {list.map((p,i)=>(<ProjectCard key={i} p={p}/>))}
        </div>
      </div>
    </section>
  )
}

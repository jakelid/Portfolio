import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import site from '../data/site.js'
import resumeEN from '../assets/EN_Jacob_Lidstone_Resume.pdf'
import resumeFR from '../assets/FR_Jacob_Lidstone_Resume.pdf'

export default function Hero(){
  return (
    <header className="hero" id="top">
      <div className="container grid">
        <div>
          <h1>Hi, I’m <span style={{color:'var(--brand)'}}>{site.name}</span> — I build fast and reliable software.</h1>
          <p className="muted">I’m drawn to systems that are clean behind the scenes and welcoming up front. Here’s a selection of projects, skills, and highlights.</p>
          <div style={{display:'flex',gap:10,marginTop:14}}>
            <a href={resumeEN} className="btn" download="EN_Jacob_Lidstone_Resume.pdf">Download Resume</a>
          </div>
        </div>
        <div>
          <div className="card">
            <h3 style={{marginTop:0}}>Snapshot</h3>
            <ul className="muted" style={{margin:'8px 0 0 18px'}}>
              <li>Interests: AI, Fullstack, Data Analytics, Cybersecurity</li>
              <li>Stack: React, Node, C++/OpenGL, Python, Java</li>
              <li>Currently: Building projects & preparing for new learning opportunities</li>
            </ul>
          </div>
          <div className="card" style={{marginTop:12}}>
            <h3 style={{marginTop:0}}>Quick links</h3>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              <a href={resumeFR} className="btn secondary" download="FR_Jacob_Lidstone_Resume.pdf">Resume (FR)</a>
              <a className="btn secondary" href="https://github.com/jakelid" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn secondary" href="https://linkedin.com/in/jacob-lidstone" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import site from '../data/site.js'

export default function Hero(){
  return (
    <header className="hero" id="top">
      <div className="container grid">
        <div>
          <h1>Hi, I’m <span style={{color:'var(--brand)'}}>{site.name}</span> — I build fast, reliable, human‑friendly software.</h1>
          <p className="muted">I love systems that feel elegant under the hood and delightful on the surface. Below is a hand‑picked selection of projects, skills, and achievements.</p>
          <div style={{display:'flex',gap:10,marginTop:14}}>
            <a href="#projects" className="btn">Explore projects <FaArrowRight/></a>
            <a href="#contact" className="btn secondary">Contact</a>
          </div>
        </div>
        <div>
          <div className="card">
            <h3 style={{marginTop:0}}>Snapshot</h3>
            <ul className="muted" style={{margin:'8px 0 0 18px'}}>
              <li>Interests: distributed systems, graphics, data</li>
              <li>Stack: React, Node, C++/OpenGL, Python</li>
              <li>Currently: building portfolio & preparing for internships</li>
            </ul>
          </div>
          <div className="card" style={{marginTop:12}}>
            <h3 style={{marginTop:0}}>Quick links</h3>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              <a className="btn secondary" href="/resume.pdf" target="_blank" rel="noreferrer">Resume (PDF)</a>
              <a className="btn secondary" href="https://github.com/yourhandle" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn secondary" href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

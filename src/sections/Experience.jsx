import React from 'react'
import site from '../data/site.js'

export default function Experience(){
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <div className="cards">
          {site.experience.map((e,i)=>(
            <article key={i} className="card col-6">
              <h3 style={{marginTop:0}}>{e.role} — {e.company}</h3>
              <p className="muted" style={{marginTop:6}}>{e.period} • {e.location}</p>
              <ul style={{marginLeft:18}}>
                {e.bullets.map((b,bi)=>(<li key={bi}>{b}</li>))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

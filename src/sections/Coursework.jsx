import React from 'react'
import site from '../data/site.js'

export default function Coursework(){
  return (
    <section id="coursework" className="section">
      <div className="container">
        <h2>Relevant Coursework</h2>
        <div className="cards">
          {site.coursework.map((c,i)=>(
            <div key={i} className="card col-4">
              <strong>{c.code}</strong>
              <div className="muted">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

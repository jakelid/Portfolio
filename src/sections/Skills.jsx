import React from 'react'
import SkillBadge from '../components/SkillBadge.jsx'
import site from '../data/site.js'

export default function Skills(){
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Technical Skills</h2>
        <p className="muted">A snapshot of tools and languages I use regularly.</p>
        <div className="cards">
          {site.skills.map((s,i)=>(<SkillBadge key={i} name={s.name} level={s.level}/>))}
        </div>
      </div>
    </section>
  )
}

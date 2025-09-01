import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ p }){
  return (
    <article className="card col-6">
      <div style={{display:'flex',justifyContent:'space-between',gap:10,alignItems:'center'}}>
        <h3 style={{margin:0}}>{p.title}</h3>
        <div style={{display:'flex',gap:8}}>
          {/*
          {p.links?.github && <a className="btn secondary" href={p.links.github} target="_blank" rel="noreferrer"><FaGithub/>Code</a>}
          {p.links?.demo && <a className="btn" href={p.links.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt/>Demo</a>}
          */}
        </div>
      </div>
      <p className="muted" style={{marginTop:6}}>{p.description}</p>
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:8}}>
        {(p.tags || []).map((t,i)=>(
          <span key={i} style={{padding:'6px 10px',border:'1px solid #334155',borderRadius:999,fontSize:12}}>{t}</span>
        ))}
      </div>
    </article>
  )
}

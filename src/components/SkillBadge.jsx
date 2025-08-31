import React from 'react'
export default function SkillBadge({ name, level='working' }){
  return (
    <div className="card col-4" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <span>{name}</span>
      <span className="muted" style={{fontSize:12,textTransform:'uppercase',letterSpacing:1}}>{level}</span>
    </div>
  )
}

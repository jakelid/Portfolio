import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="divider" />
        <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
          <span>© <span id="y">{new Date().getFullYear()}</span> Your Name</span>
          <span className="muted">Built with React + Vite • Deployed to GitHub Pages</span>
        </div>
      </div>
    </footer>
  )
}

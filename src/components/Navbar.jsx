import React from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'coursework', label: 'Coursework' },
]

export default function Navbar() {
  const [active, setActive] = React.useState('about')

  React.useEffect(() => {
    const handler = () => {
      const sections = links.map(l => document.getElementById(l.id)).filter(Boolean)
      let current = 'about'
      for (const s of sections) {
        const rect = s.getBoundingClientRect()
        if (rect.top <= 120) current = s.id
      }
      setActive(current)
    }
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className="navbar">
      <div className="container inner">
        <a className="brand" href="#top">
          <span style={{width:10,height:10,display:'inline-block',borderRadius:99,background:'var(--brand)'}}/>
          <span>CS Portfolio</span>
        </a>
        <div className="links">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className={active===l.id ? 'active' : ''}>{l.label}</a>
          ))}
          <a href="https://github.com/jakelid" target="_blank" rel="noreferrer" title="GitHub"><FaGithub/></a>
          <a href="https://linkedin.com/in/jacob-lidstone" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin/></a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

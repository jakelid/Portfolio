import React from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('theme') || 'dark'
  })

  React.useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') root.classList.add('light')
    else root.classList.remove('light')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button className="btn secondary" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? 'Light' : 'Dark'} mode
    </button>
  )
}

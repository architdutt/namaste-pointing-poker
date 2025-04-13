import { useEffect, useState } from 'react'
import Body from './components/Body'
import FooterSection from './components/FooterSection'
import HeaderSection from './components/HeaderSection'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) return storedTheme === 'dark'
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])
  
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <HeaderSection toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Body />
      <FooterSection />
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'
import { AnimatePresence } from 'framer-motion'

const Layout = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) return storedTheme === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
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

  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <HeaderSection toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <FooterSection />
    </div>
  )
}

export default Layout

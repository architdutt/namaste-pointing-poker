import React from 'react'
import pokerLogo from '../assets/planning-poker.svg'

const HeaderSection = ({ toggleTheme, darkMode }) => {
  return (
      <header className="transition-colors duration-500 bg-white dark:bg-gray-800 shadow p-4 flex items-center justify-between border-b dark:border-gray-700">

      <div className="flex items-center space-x-3">
        <img src={pokerLogo} className="w-10 h-10" alt="planning-poker" />
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Namaste Pointing Poker
        </h1>
      </div>
      <button
  onClick={toggleTheme}
  className="flex items-center space-x-2 px-3 py-1 border rounded-full transition-all duration-300 
             bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
>
  {darkMode ? (
    <span className="flex items-center space-x-1">
      <span>🌞</span>
      <span>Light</span>
    </span>
  ) : (
    <span className="flex items-center space-x-1">
      <span>🌙</span>
      <span>Dark</span>
    </span>
  )}
</button>

    </header>
  )
}

export default HeaderSection

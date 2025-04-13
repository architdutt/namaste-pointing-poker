import React from 'react'
import pokerLogo from '../assets/planning-poker.svg'

const HeaderSection = ({ toggleTheme, darkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex items-center justify-between border-b dark:border-gray-700">
      <div className="flex items-center space-x-3">
        <img src={pokerLogo} className="w-10 h-10" alt="planning-poker" />
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Namaste Pointing Poker
        </h1>
      </div>
      <button
        onClick={toggleTheme}
        className="text-sm px-3 py-1 border rounded-full transition-all bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  )
}

export default HeaderSection

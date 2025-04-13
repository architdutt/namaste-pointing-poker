import React from 'react'

const FooterSection = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-center p-4 text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700">
      © {new Date().getFullYear()} point.poker — Built with ❤️ using React + Tailwind CSS
    </footer>
  )
}

export default FooterSection

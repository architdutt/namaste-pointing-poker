// src/components/Modal.jsx
import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl relative">
        <button
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal

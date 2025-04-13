import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const Session = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleJoin = () => {
    if (!name.trim()) return
    localStorage.setItem('participantName', name)
    navigate(`/session/${id}/vote?name=${encodeURIComponent(name)}`)
  }

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center h-[80vh] px-4">
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Join Session</h2>
          <p className="text-sm mb-6 text-center">Session ID: <code>{id}</code></p>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full mb-4 p-3 border rounded-lg text-gray-800 dark:text-gray-900"
          />

          <button
            onClick={handleJoin}
            className="w-full bg-blue-600 text-white py-2 rounded-3xl hover:bg-blue-700"
          >
            Join
          </button>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Session

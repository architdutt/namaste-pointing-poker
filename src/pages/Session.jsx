import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import { Helmet } from 'react-helmet-async' 

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
       <Helmet>
        <title>Join Session | Namaste Pointing Poker</title>
        <meta
          name="description"
          content={`Join session ${id} on Namaste Pointing Poker. A simple, collaborative tool for Agile teams to estimate tasks.`}
        />
        <meta property="og:title" content="Join a Pointing Poker Session" />
        <meta property="og:description" content="Join and collaborate with your Agile team to estimate stories easily and quickly." />
        <meta property="og:url" content={`https://namaste-pointing-poker.web.app/session/${id}`} />
        <meta property="og:image" content="https://namaste-pointing-poker.web.app/og-image.jpg" />
      </Helmet>
      <div className="flex flex-col items-center justify-center h-[80vh] px-4">
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Join Session</h2>
          <p className="text-sm mb-6 text-center">Session ID: <code>{id}</code></p>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full mb-4 p-3 border rounded-lg text-gray-800 dark:text-white"
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

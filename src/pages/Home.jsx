import React from 'react'
import PageWrapper from '../components/PageWrapper'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const Home = () => {
    const navigate = useNavigate()

    const handleCreateSession = () => {
        const sessionId = uuidv4()
        navigate(`/session/${sessionId}`)
    }

  return (
    <PageWrapper>
    <div className="flex flex-col items-center justify-center flex-grow bg-gray-100 dark:bg-gray-900 p-4 transition-colors">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-md p-6 max-w-2xl">
        <h2 className="text-3xl font-semibold mb-4">Namaste Pointing Poker</h2>
        <p className="text-lg mb-4">
          Welcome to point.poker! A simple, intuitive Planning Poker tool designed for remote, collaborative teams.
          <br /><br />
          Planning Poker—also known as Scrum Poker, Pointing Poker, or Point Poker—is a gamified technique that helps teams achieve consensus on task estimations.
          <br /><br />
          <strong>Why choose point.poker?</strong><br />
          • Completely free<br />
          • Quick and user-friendly<br />
          • No sign-up needed<br />
          • Unlimited sessions, rounds, and votes<br />
          • Fully responsive — works seamlessly on desktop, tablet, and mobile
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-3xl hover:bg-blue-700"
        onClick={handleCreateSession}>
          Create a pointing poker session
        </button>
      </div>
    </div>
    </PageWrapper>
  )
}

export default Home
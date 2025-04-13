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
            Welcome to Namaste Pointing Poker, an intuitive tool designed for collaborative teams to estimate tasks remotely.
            <br /><br />
            Planning Poker (also known as Scrum Poker or Pointing Poker) is a simple, gamified technique that helps teams reach consensus on task estimations.
            <br /><br />
            <strong>Why choose Namaste Pointing Poker?</strong><br />
            • Completely free<br />
            • Quick and user-friendly<br />
            • No sign-up needed<br />
            • Unlimited sessions and votes<br />
            • Fully responsive — works on desktop, tablet, and mobile
            <br /><br />
            <strong>Why use Pointing Poker?</strong><br />
            It helps teams achieve collective estimates, reduce bias, and improve collaboration. The system uses a Fibonacci scale for estimating task complexity:
            <ul className="list-disc pl-6">
              <li>0, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?, ∞</li>
            </ul>
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

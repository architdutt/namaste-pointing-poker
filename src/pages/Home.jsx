import React from 'react'
import PageWrapper from '../components/PageWrapper'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const navigate = useNavigate()

    const handleCreateSession = () => {
        const sessionId = uuidv4()
        navigate(`/session/${sessionId}`)
    }

  return (
    <>
    <Helmet>
  <title>Namaste Pointing Poker | Agile Estimation Made Simple</title>
  <meta name="description" content="Namaste Pointing Poker is a free, fast, and collaborative tool for agile teams to estimate story points using Planning Poker." />
  <meta name="keywords" content="Planning Poker, Scrum Poker, Agile, Estimation, Pointing Poker, Story Points, Namaste Pointing Poker" />
  <meta name="author" content="Archit Dutt Sharma" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Namaste Pointing Poker" />
  <meta property="og:description" content="A simple and intuitive pointing poker tool for agile teams to estimate stories remotely." />
  <meta property="og:image" content="https://namaste-pointing-poker.web.app/og-image.jpg" />
  <meta property="og:url" content="https://namaste-pointing-poker.web.app" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Namaste Pointing Poker" />
  <meta name="twitter:description" content="Estimation made easy with a free Planning Poker tool for agile teams." />
  <meta name="twitter:image" content="https://namaste-pointing-poker.web.app/og-image.jpg" />
</Helmet>
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
            </p>
            <ul className="list-disc pl-6 mb-2">
              <li>0, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?, ∞</li>
            </ul>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-3xl hover:bg-blue-700"
          onClick={handleCreateSession}>
            Create a pointing poker session
          </button>
        </div>
      </div>
    </PageWrapper>
    </>
  )
}

export default Home

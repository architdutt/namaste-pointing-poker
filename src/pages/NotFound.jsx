import React from 'react'
import PageWrapper from '../components/PageWrapper'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <PageWrapper>
      <div className="text-center mt-20">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Oops! The page you are looking for doesn't exist.</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back home
        </Link>
      </div>
    </PageWrapper>
  )
}

export default NotFound

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Namaste Pointing Poker</h1>
      <div className="card">
        
        <p>
        Welcome to point.poker!
A simple, intuitive Planning Poker tool designed for remote, collaborative teams.

Planning Poker—also known as Scrum Poker, Pointing Poker, or Point Poker—is a gamified technique that helps teams achieve consensus on task estimations.

Why choose point.poker?

Completely free

Quick and user-friendly

No sign-up needed

Unlimited sessions, rounds, and votes

Fully responsive — works seamlessly on desktop, tablet, and mobile
        </p>
      </div>
      
    </>
  )
}

export default App

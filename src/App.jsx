import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Session from './pages/Session'
import VoteSession from './pages/VoteSession'

function App() {

  
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/session/:id" element={<Session />} />  
          <Route path="/session/:id/vote" element={<VoteSession />} />     
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

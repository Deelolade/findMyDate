import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProfilePage from './Pages/ProfilePage'
import MatchesPage from './Pages/MatchesPage' 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path='/matches' element={<MatchesPage/>}/>
      </Routes>
    </Router>
  )
}

export default App

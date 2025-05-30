import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar, Home, About, Plants } from './components'

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Navbar />

        {/* Main content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plants" element={<Plants />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

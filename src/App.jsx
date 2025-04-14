
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import Transactions from './pages/Transactions'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<Home />} />

      {/* Connexion page */}
      <Route path="/sign-in" element={<SignIn />} />

      {/* Profil page */}
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />

      {/* Transactions page */}
      <Route
        path="/transactions/:accountId"
        element={
          <PrivateRoute>
            <Transactions />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default App








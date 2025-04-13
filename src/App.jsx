// src/App.jsx
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
      {/* 🏠 Page d’accueil */}
      <Route path="/" element={<Home />} />

      {/* 🔐 Page de connexion */}
      <Route path="/sign-in" element={<SignIn />} />

      {/* 👤 Page de profil (protégée) */}
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />

      {/* 📊 Page des transactions (protégée) */}
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








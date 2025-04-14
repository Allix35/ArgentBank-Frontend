import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginSuccess, setUser } from "../redux/userSlice" // Redux action
import { loginUser, getUserProfile } from "../services/api" // Functions to interact with API
import Button from "./Button"

function SignInForm() {
  // Local storage of form field
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch() // To send Redux action
  const navigate = useNavigate() // To redirect user after connection

  // Function executed after form submission
  const handleSubmit = async (e) => {
    e.preventDefault() 

    try {
      // Call API to get token JWT
      const token = await loginUser(email, password)

      // Send token to Redux store
      dispatch(loginSuccess({ token }))

      // Get user profil with token
      const userProfile = await getUserProfile(token)

      // User info storage in Redux
      dispatch(setUser(userProfile))

      // Redirection to (/user)
      navigate("/user")
    } catch (error) {
      console.error("Erreur de connexion :", error)
      alert("Erreur : " + error.message) // Manage error message 
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Local update
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      {/* Submission form button */}
      <Button className="sign-in-button" type="submit">
        Sign In
      </Button>
    </form>
  )
}

export default SignInForm


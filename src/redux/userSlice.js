
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null, // Token not connected, no data
  user: null, // No user data
  isAuthenticated: false // User not connected
}

// userSlice created with name, initial state & reducers

const userSlice = createSlice({ 
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => { // Action called if connected
      state.token = action.payload.token // Token stock in REDUX
      state.isAuthenticated = true // True to unlock protected roads
    },
    logout: (state) => { // Action called when disconnected
      state.token = null // Delete token
      state.user = null // Delete user info
      state.isAuthenticated = false
    },
    setUser: (state, action) => { // Action called to stock user info after API call
      state.user = action.payload // Profil data stocked in store
    }
  }
})

export const { loginSuccess, logout, setUser } = userSlice.actions
export default userSlice.reducer // Export reducer to put it in global store

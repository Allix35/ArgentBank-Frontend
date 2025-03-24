// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.token = null
      state.user = null
      state.isAuthenticated = false
    },
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { loginSuccess, logout, setUser } = userSlice.actions
export default userSlice.reducer

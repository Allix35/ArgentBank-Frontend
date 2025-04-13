import { configureStore } from "@reduxjs/toolkit" // Import to create global store
import userReducer from "./userSlice"
import accountReducer from "./accountSlice" 

export const store = configureStore({
  reducer: {
    user: userReducer, // stock connected user data
    account: accountReducer, // stock account
  },
})


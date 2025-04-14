// Import createSlice to create slice Redux
import { createSlice } from "@reduxjs/toolkit"
// Import fonction to call API 
import { getAccounts } from "../services/api"

const initialState = {
  accounts: [],   // No account
  status: "idle",  // Idle status (then loading -->succeed/failed)   
  error: null,  // No error
}

// Slice creation "account"
const accountSlice = createSlice({
  name: "account",     
  initialState,           
  reducers: {  // actions + reducers declaration

    // Action before callign API
    fetchAccountsStart: (state) => {
      state.status = "loading" 
    },

    // Action if succed
    fetchAccountsSuccess: (state, action) => {
      state.status = "succeeded"  // Status update
      state.accounts = action.payload   // Store account getting from Redux
    },

    // Action if failed
    fetchAccountsFailure: (state, action) => {
      state.status = "failed"  // Error display
      state.error = action.payload // Store error message
    },
  },
})

// Actions export to use in thunk
export const {
  fetchAccountsStart,
  fetchAccountsSuccess,
  fetchAccountsFailure,
} = accountSlice.actions

// Asynchrone thunk to call API and dispatche right actions
export const fetchAccounts = (token) => async (dispatch) => {
  try {
    dispatch(fetchAccountsStart()) // Start loading state
    const data = await getAccounts(token) //Call API
    dispatch(fetchAccountsSuccess(data))  // Store account if succed
  } catch (error) {
    dispatch(fetchAccountsFailure(error.message)) // Manage error if failed
  }
}

// reducer export to add in global store
export default accountSlice.reducer


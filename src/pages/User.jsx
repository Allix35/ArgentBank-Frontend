import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../redux/userSlice"
import { getUserProfile, getAccounts } from "../services/api" // API calls
import Header from "../components/Header"
import Footer from "../components/Footer"
import AccountCard from "../components/AccountCard"
import Button from "../components/Button"
import EditUserNameForm from "../components/EditUserNameForm"

function User() {
  const dispatch = useDispatch() // To send an action to Redux
  const token = useSelector((state) => state.user.token) // Get token from Redux
  const user = useSelector((state) => state.user.user)   // Get user info from

  const [isEditing, setIsEditing] = useState(false) // To manage form edition
  const [accounts, setAccounts] = useState([])      // To store locally account list

  // Get user data when loading component
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserProfile(token)  // Call API for user profil
        dispatch(setUser(userData))  // Stock info in Redux

        const accountsData = await getAccounts(token)  // Call API for account
        setAccounts(accountsData.body || accountsData)  // store accounts locally
      } catch (error) {
        console.error("Erreur récupération des données :", error)
      }
    }

    if (token) {
      fetchUserData()
    }
  }, [token, dispatch])

  return (
    <>
      <Header /> 

      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {/* Dislay user full name */}
            {user ? `${user.firstName} ${user.lastName}` : "Loading..."}
          </h1>

          {/* Display form when click on edit button otherwise display edit name button */}
          {isEditing ? (
            <EditUserNameForm onClose={() => setIsEditing(false)} />
          ) : (
            <Button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </Button>
          )}
        </div>

        <h2 className="sr-only">Accounts</h2>

        {/* Get account card dynamically */}
        {accounts.map((account) => (
          <AccountCard
            key={account.id || account.accountId}
            title={account.title || account.name}
            amount={account.amount || account.balance}
            description={account.description || "Available Balance"}
            accountId={account.id || account.accountId}
          />
        ))}
      </main>

      <Footer /> 
    </>
  )
}

export default User








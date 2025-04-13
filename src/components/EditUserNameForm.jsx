import React, { useState } from "react" // Hook useState to mange local state of userName field
import { useDispatch, useSelector } from "react-redux" 
import { updateUsername } from "../services/api" // Function to update userName via l'API
import { setUser } from "../redux/userSlice" // Redux action to update user in global state 
import Button from "./Button" 

function EditUserNameForm({ onClose }) {
  const dispatch = useDispatch() // dispatcher Redux action
  const token = useSelector((state) => state.user.token) // Get token JWT for authentification
  const user = useSelector((state) => state.user.user) // Get user info

  const [newUserName, setNewUserName] = useState(user?.userName || "") // Stock the value

  const handleSubmit = async (e) => {
    e.preventDefault() 

    try {
      const updatedUser = await updateUsername(token, newUserName) // PUT request to API
      dispatch(setUser({ ...user, userName: updatedUser.userName })) // Redux update
      onClose() // Closing form
    } catch (error) {
      console.error("Erreur updateUsername :", error)
      alert("Une erreur est survenue lors de la mise à jour du nom d'utilisateur")
    }
  }

  return (
    <form className="edit-user-info-form" onSubmit={handleSubmit}>
      <h2>Edit user info</h2>

      {/* Fiel for pseudonyme */}
      <div className="input-wrapper">
        <label htmlFor="username">User name:</label>
        <input
          id="username"
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)} // Update local state
        />
      </div>

      {/* Disable field */}
      <div className="input-wrapper">
        <label htmlFor="firstname">First name:</label>
        <input
          id="firstname"
          type="text"
          value={user?.firstName || ""}
          disabled 
        />
      </div>

      <div className="input-wrapper">
        <label htmlFor="lastname">Last name:</label>
        <input
          id="lastname"
          type="text"
          value={user?.lastName || ""}
          disabled
        />
      </div>

      {/* Button to save or canceled */}
      <div className="edit-buttons">
        <Button className="btn-green" type="submit">Save</Button>
        <Button className="btn-green" type="button" onClick={onClose}>Cancel</Button>
      </div>
    </form>
  )
}

export default EditUserNameForm // Component Export to use in User.jsx



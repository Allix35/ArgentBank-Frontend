import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom' // Navigation between roads
import { useSelector, useDispatch } from 'react-redux'   // To access and modify REDUX
import { logout } from '../redux/userSlice'              // Action to disconnect

function Header() {
  // Getting user informaion from Redux

  const { isAuthenticated, user } = useSelector((state) => state.user)

  const dispatch = useDispatch() // Send Redux Action
  const navigate = useNavigate() // Redirection after disconnection

  // Function called when user click on "sign out"
  const handleLogout = () => {
    dispatch(logout())   // Delete token, user, auth
    navigate('/')        // Homepage redirection
  }

  return (
    <nav className="main-nav">
      {/* Homepage when user click on the logo */}
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
          loading="lazy"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      <div>
        {isAuthenticated && user ? (
          // When user is connected
          <>
            {/* Link to dashbord with username */}
            <NavLink
              to="/user"
              className={({ isActive }) =>
                isActive ? 'main-nav-item router-link-exact-active' : 'main-nav-item'
              }
            >
              <i className="fa fa-user-circle"></i>
              {user.userName}
            </NavLink>

            {/* Disconnection link */}
            <a className="main-nav-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </>
        ) : (
          // Otherwise --> connection link
          <NavLink
            to="/sign-in"
            className={({ isActive }) =>
              isActive ? 'main-nav-item router-link-exact-active' : 'main-nav-item'
            }
          >
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Header





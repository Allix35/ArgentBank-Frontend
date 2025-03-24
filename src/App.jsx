import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// Tu pourras importer les autres pages plus tard comme SignIn et User

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sign-in" element={<SignIn />} /> */}
        {/* <Route path="/user" element={<User />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App


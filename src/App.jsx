import "./App.css"
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Challenges from "./pages/Challenges"
import Profile from "./pages/Profile"
import Challenge from "./pages/Challenge"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/challenges" element={<Challenges />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/createChallenge" element={<Challenge />}></Route>
      </Routes>
    </>
  )
}

export default App

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import HeaderAuth from "../components/HeaderAuth"
import FormLogin from "../components/FormLogin"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    const auth = getAuth()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log("Vous êtes connecté !")
    } catch (error) {
      console.error("Erreur de connexion : ", error.message)
    }
    navigate("/dashboard")
  }
  return (
    <>
      <HeaderAuth />
      <div>
        <form onS{{  }}t={handleLogin} className="max-w-sm mx-auto my-10">
          <div class{{  }}="max-w-sm mx-auto my-10">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Votre email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-black bg-blue-500 hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Connexion
          </button>
        </form>
      </div>
    </>
  )
}

export default Login

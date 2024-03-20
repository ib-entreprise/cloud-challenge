import React, { useState } from "react"
import HeaderAuth from "../components/HeaderAuth"
import FormLogin from "../components/FormLogin"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

function Login() {
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
  }
  return (
    <>
      <HeaderAuth />
      <div>
        <form onSubmit={handleLogin} className="max-w-sm mx-auto my-10">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
          />
          <button type="submit">Connexion</button>
        </form>
      </div>
    </>
  )
}

export default Login

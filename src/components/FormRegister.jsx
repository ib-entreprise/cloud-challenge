import React, { useState } from "react"
import { auth } from "./firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

function FormRegister() {
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")

  // Register new user
  const handleRegister = (e) => {
    e.preventDefault()
    if (password1 && password2 && password1 == password2 && email) {
      createUserWithEmailAndPassword(auth, email, password1)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
        })
    } else {
      alert("remplir corrrectement tous les champs...")
    }
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordRegistration = (e) => {
    setPassword1(e.target.value)
  }
  const handlePasswordRegistrationRepeat = (e) => {
    setPassword2(e.target.value)
  }

  return (
    <section>
      <form
        className="max-w-md mx-auto"
        method="post"
        onSubmit={handleRegister}
      >
        <div className="my-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Votre email
          </label>
          <input
            type="email"
            id="email"
            onChange={handleEmailChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Votre mot de passe
          </label>
          <input
            type="password"
            id="password"
            onChange={handlePasswordRegistration}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Répeter le mot de passe
          </label>
          <input
            type="password"
            id="repeat-password"
            onChange={handlePasswordRegistrationRepeat}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-green-500 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-green-700 dark:focus:ring-green-800 dark:hover:white hover:text-white"
        >
          Créer votre nouveau compte
        </button>
      </form>
    </section>
  )
}

export default FormRegister

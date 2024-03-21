import React, { useState } from "react"
import { createChallenge } from "./firebase"
import { toast, ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"

function FormChallenge() {
  const navigate = useNavigate()
  const [challengeData, setChallengeData] = useState({})

  const addChallenge = (e) => {
    const { name, value } = e.target
    setChallengeData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section>
      <form
        className="max-w-lg mx-auto mt-10"
        method="post"
        onSubmit={async (e) => {
          e.preventDefault()
          if (
            !challengeData.titre ||
            !challengeData.description ||
            !challengeData.urlRepository
          ) {
            toast.error("Tous les champs doivent être complétés !")
            return
          }
          if (!challengeData.urlRepository.match(/^https:\/\/github\.com/)) {
            toast.error("L'url n'est pas une url d'un dépot github valide !")
            return
          }

          await createChallenge(challengeData)
          toast.success("Votre challenge a bien été crée avec succès !")
          setChallengeData({})
          navigate("/dashboard")
        }}
      >
        <div className="mb-5">
          <label
            htmlFor="titre"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Titre
          </label>
          <input
            type="text"
            id="titre"
            name="titre"
            onChange={addChallenge}
            value={challengeData.titre || ""}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Titre du challenge"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            onChange={addChallenge}
            value={challengeData.description || ""}
            className="h-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="urlRepo"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            URL du repository
          </label>
          <input
            type="text"
            id="urlRepo"
            name="urlRepository"
            placeholder="https://github.com/"
            onChange={addChallenge}
            value={challengeData.urlRepository || ""}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <button
          type="submit"
          className="w-full text-black bg-blue-500 hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Soumettre votre challenge
        </button>
      </form>
      <ToastContainer theme="colored" position="bottom-right" />
    </section>
  )
}

export default FormChallenge

import React, { useState } from "react"
import { createChallenge } from "./firebase"

function FormChallenge() {
  const [challengeData, useChallengeData] = useState({})

  const addChallenge = (e) => {
    const { name, value } = e.target
    useChallengeData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section>
      <form
        class="max-w-lg mx-auto mt-10"
        method="post"
        onSubmit={async (e) => {
          e.preventDefault()
          await createChallenge(challengeData)
        }}
      >
        <div class="mb-5">
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
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Titre du challenge"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            onChange={addChallenge}
            value={challengeData.description || ""}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="urlRepo"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            URL du repository
          </label>
          <input
            type="url"
            id="urlRepo"
            name="urlRepository"
            onChange={addChallenge}
            value={challengeData.urlRepository || ""}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-black bg-blue-500 hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Soumettre votre challenge
        </button>
      </form>
    </section>
  )
}

export default FormChallenge

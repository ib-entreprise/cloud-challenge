import React, { useState } from "react"

function FormChallenge() {
  const [challengeData, useChallengeData] = useState({})

  const createChallenge = (e) => {
    const { name, value } = e.target
    useChallengeData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section>
      <form class="max-w-lg mx-auto">
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
            onChange={createChallenge}
            value={challengeData.titre || ""}
            class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            onChange={createChallenge}
            value={challengeData.description || ""}
            class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            onChange={createChallenge}
            value={challengeData.urlRepository || ""}
            class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button type="submit">Soumettre votre challenge</button>
      </form>
    </section>
  )
}

export default FormChallenge

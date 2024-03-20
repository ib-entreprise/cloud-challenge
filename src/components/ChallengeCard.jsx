import React from "react"

function ChallengeCard({ challenge }) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/logo_officiel.png"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {challenge.titre}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {challenge.description}
          </p>
        </div>
      </div>
    </>
  )
}

export default ChallengeCard

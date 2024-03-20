import React from "react"

function ProgressionBar() {
  return (
    <>
      <div className="mb-1 text-base font-medium dark:text-black">
        Votre progression de challenges réussis
      </div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: "45%" }}
        >
          45%
        </div>
      </div>
    </>
  )
}

export default ProgressionBar

import React from "react"
import Header from "../components/Header"
import ChallengeCard from "../components/ChallengeCard"

function Dashboard() {
  return (
    <>
      <Header />
      <div>Barre de progression des challenges réussis</div>
      <main className="flex justify-center items-start gap-5 flex-wrap my-8">
        <ChallengeCard />
      </main>
    </>
  )
}

export default Dashboard

import React from "react"
import Header from "../components/Header"
import ChoicesChallenges from "../components/ChoicesChallenges"
import ChallengeCard from "../components/ChallengeCard"
import { useSelector } from "react-redux"

function Challenges() {
  const { challenges } = useSelector((state) => state.challenge)
  return (
    <>
      <Header />
      <h1 className="my-5 font-semibold text-blackdark:text-white text-center text-xl">
        Voici la liste de tous les challenges
      </h1>
      <ChoicesChallenges />
      <section className="flex px-3 justify-center items-start gap-5 flex-wrap my-8">
        {challenges.map((challenge) => {
          return <ChallengeCard key={challenge.id} challenge={challenge} />
        })}
      </section>
    </>
  )
}

export default Challenges

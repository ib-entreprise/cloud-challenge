import React, { useDebugValue, useEffect } from "react"
import Header from "../components/Header"
import ChallengeCard from "../components/ChallengeCard"
import { getChallenges } from "../components/firebase"
import { useSelector, useDispatch } from "react-redux"
import { setChallenges } from "../store/challenge/challengeSlice"

function Dashboard() {
  const { challenges } = useSelector((state) => state.challenge)
  const dispatch = useDispatch()

  useEffect(() => {
    const getChallengesApi = async () => {
      const data = await getChallenges()
      dispatch(setChallenges(data))
    }

    getChallengesApi()
  }, [])

  return (
    <>
      <Header />
      <div>Barre de progression des challenges réussis</div>
      <main className="flex justify-center items-start gap-5 flex-wrap my-8">
        {challenges.map((challenge) => {
          return <ChallengeCard key={challenge.id} challenge={challenge} />
        })}
      </main>
    </>
  )
}

export default Dashboard

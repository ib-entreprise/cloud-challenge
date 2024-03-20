import { configureStore } from "@reduxjs/toolkit"
import ChallengeSlice from "./challenge/challengeSlice"
import SolutionSlice from "./solution/solutionSlice"

export const store = configureStore({
  reducer: {
    challenge: ChallengeSlice.reducer,
    solution: SolutionSlice.reducer,
  },
})

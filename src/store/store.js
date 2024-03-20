import { configureStore } from "@reduxjs/toolkit"
import ChallengeSlice from "./challenge/challengeSlice"
import SolutionSlice from "./solution/solutionSlice"
import UserSlice from "./user/userSlice"

export const store = configureStore({
  reducer: {
    challenge: ChallengeSlice.reducer,
    solution: SolutionSlice.reducer,
    user: UserSlice.reducer,
  },
})

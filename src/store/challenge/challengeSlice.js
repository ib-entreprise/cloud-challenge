import { createSlice } from "@reduxjs/toolkit"

const ChallengeSlice = createSlice({
  name: "challenge",
  initialState: {
    challenges: [],
  },
  reducers: {
    setChallenges: (state, { payload }) => {
      state.challenges = payload
    },
  },
})

export const { setChallenges } = ChallengeSlice.actions

export default ChallengeSlice

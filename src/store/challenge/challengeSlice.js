import { createSlice } from "@reduxjs/toolkit"

const ChallengeSlice = createSlice({
  name: "challenge",
  initialState: {
    challenges: [],
    challenge: {},
  },
  reducers: {
    setChallenges: (state, { payload }) => {
      state.challenges = payload
    },
    getChallenge: (state, { payload }) => {
      state.challenge = payload
    },
  },
})

export const { setChallenges, getChallenge } = ChallengeSlice.actions

export default ChallengeSlice

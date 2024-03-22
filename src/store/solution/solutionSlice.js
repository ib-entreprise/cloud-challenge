import { createSlice } from "@reduxjs/toolkit"

const SolutionSlice = createSlice({
  name: "challenge",
  initialState: {
    solutions: [],
    displayFormSoluce: false,
  },
  reducers: {
    setDisplayFormSoluce: (state, { payload }) => {
      state.displayFormSoluce = payload
    },
  },
})

export const { setDisplayFormSoluce } = SolutionSlice.actions

export default SolutionSlice

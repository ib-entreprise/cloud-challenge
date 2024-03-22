import { createSlice } from "@reduxjs/toolkit"

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    getUser: (state, { payload }) => {
      state.user = payload
    },
  },
})

export const { getUser } = UserSlice.actions

export default UserSlice

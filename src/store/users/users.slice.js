import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
  },
  reducers: {
    setList: (state, { payload }) => {
      state.list = payload
    },
  },
})

export default usersSlice

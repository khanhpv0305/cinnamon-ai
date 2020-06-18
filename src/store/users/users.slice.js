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
    create: (state, { payload }) => {
      state.list.push(payload)
    },
    edit: (state, { payload }) => {
      const { id } = payload

      const foundUserIdx = state.list.findIndex((user) => user.id === id)

      if (foundUserIdx > -1) {
        state.list[foundUserIdx] = payload
      }
    },
    delete: (state, { payload }) => {
      const { id } = payload

      const foundUserIdx = state.list.findIndex((user) => user.id === id)

      if (foundUserIdx > -1) {
        state.list.splice(foundUserIdx, 1)
      }
    },
  },
})

export default usersSlice

import { createSlice } from '@reduxjs/toolkit'
import initialState from '../../state/state'

export const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    toggleMenuStatus(state) {
      state.showMenu = !state.showMenu
    }
  }
})

export default appSlice.reducer

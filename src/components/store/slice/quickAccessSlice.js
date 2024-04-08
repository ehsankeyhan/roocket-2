import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const quickAccess = createSlice({
  name: 'quickAccessIsOpen',
  initialState,
  reducers: {
    toggleQuickAccess: (state) => {
      state.value = !state.value
    },
  },
})
export const { toggleQuickAccess } = quickAccess.actions

export default quickAccess.reducer
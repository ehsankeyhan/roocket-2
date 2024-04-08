import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './slice/menuSlice'
import quickAccessReducer from './slice/quickAccessSlice'
export const store = configureStore({
  reducer: {
    menuIsOpen:menuReducer,
    quickAccessIsOpen:quickAccessReducer,
  },
})
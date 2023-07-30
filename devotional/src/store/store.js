import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './slicers'

export const store = configureStore({
   reducer: {
      player: playerReducer
   },
})
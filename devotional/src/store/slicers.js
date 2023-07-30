import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isplaying: false,
   playsong: '',
   songslist: '',
   isselected: false,
}

export const playerSlice = createSlice({
   name: 'player',
   initialState,
   reducers: {
      setisplaying: (state, action) => {
         state.isplaying = action.payload
      },
      setplaysong: (state, action) => {
         state.playsong = action.payload
      },
      setsongslist: (state, action) => {
         state.songslist = action.payload
      },
      setisselected: (state, action) => {
         state.isselected = action.payload
      }

   },
})

// Action creators are generated for each case reducer function
export const { setisplaying, setsongslist, setplaysong, setisselected } = playerSlice.actions

export default playerSlice.reducer
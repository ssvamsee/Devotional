import React from 'react'
import './NavBar.css'
import { BsMusicNoteList, BsChevronLeft } from "react-icons/bs";
import { setsongslist, setplaysong, setisselected, setisplaying } from '../../store/slicers'
import { useSelector, useDispatch } from 'react-redux'

export default function Navbar() {
   const list = useSelector((state) => state.player.songslist)
   const dispatch = useDispatch()
   return (
      <div id='NavBar'>
         <nav className='Nav_container'>
            <div className='minNav'>
               <span className='Logo'> <BsMusicNoteList /> Devotional-<span className='second_logo'>Music</span></span>
               {
                  list?.length > 0 ? <span className='back_btn' onClick={() => dispatch(setsongslist(''))}> <BsChevronLeft /> Back</span> : ''
               }
            </div>

         </nav>
      </div>
   )
}
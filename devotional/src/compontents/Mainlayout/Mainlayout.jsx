import React from 'react'
import { content } from '../../Content/Data'
import './Mainlayout.css'
import Navbar from '../NavBar/Navbar'
import Player from '../Player/Player'
import { useSelector, useDispatch } from 'react-redux'
import { BsCaretRight, BsPause } from 'react-icons/bs'
import { setsongslist, setplaysong, setisselected, setisplaying } from '../../store/slicers'

export default function Mainlayout() {
   const dispatch = useDispatch()
   const isplaying = useSelector((state) => state.player.isplaying)
   const list = useSelector((state) => state.player.songslist)
   const isslected = useSelector((state) => state.player.isselected)

   const fetchdata = async (qurey) => {
      await fetch(`https://devotional.onrender.com/songs/?category=${qurey}`, {
         method: 'GET',
         mode: 'cors',
      }).then(response => response.json())
         .then(response => dispatch(setsongslist(response)))
         .catch(err => console.log(err))
   }


   const songplay = (song, i) => {

      if (isplaying) {
         dispatch(setisplaying(false))
      } else {
         dispatch(setisplaying(true))
      }
      dispatch(setplaysong({ name: song?.name, URL: song?.url, index: i }))
      dispatch(setisselected(song?._id))
      dispatch(setisplaying(true))
   }
   return (
      <>
         <Navbar />
         <div className='main_container'>
            <div className='Main_warpper'>
               {
                  list?.length > 0 ? <ul className='Music_list2'>
                     {
                        list?.map((song, index) => {
                           return (
                              <li key={index} onClick={() => songplay(song, index)} className={isslected === song?._id ? "Active_song" : ''}>
                                 <span>{index + 1} .</span>
                                 <span>{song.name}</span>
                              </li>
                           )
                        })
                     }
                  </ul> : <ul className='Music_list'>
                     {
                        content?.map((data, i) => {
                           return (
                              <li key={i} onClick={() => fetchdata(data?.key)}>
                                 <img src={data?.URL}
                                    alt='Png'
                                    className='List_Image'
                                 />
                                 <p className='List_name'>{data?.name}</p>
                              </li>
                           )
                        })
                     }
                  </ul>
               }
            </div>
         </div>
         <Player />
      </>
   )
}
import React, { useEffect, useRef } from 'react'
import './Player.css'
import { BsCaretRight, BsShuffle, BsSkipBackward, BsSkipForward, BsPause } from 'react-icons/bs'
import { setisplaying, setisselected, setplaysong } from '../../store/slicers'
import { useSelector, useDispatch } from 'react-redux'
function Player() {
   const dispatch = useDispatch()
   const isplaying = useSelector((state) => state.player.isplaying)
   const list = useSelector((state) => state.player.songslist)
   const selectedSong = useSelector((state) => state.player.playsong)
   const song = useRef()

   useEffect(() => {

      if (isplaying === true) {
         song?.current?.play()
      } else if (isplaying === false) {
         song?.current?.pause()
      }
   }, [isplaying, selectedSong])

   const backwordsong = async (i) => {
      const key = (list?.length - i)
      console.log(key)
      const backwordsong = list[key]
      dispatch(setisselected({ name: backwordsong?.name, URL: backwordsong?.url, index: key }))
   }
   const forwordsong = async (i) => {
      let key
      if (i === 0) {
         key = 1
      } else {
         key = i + 1
      }
      console.log(key)
      const forwordsong = list[key]
      dispatch(setisselected({ name: forwordsong?.name, URL: forwordsong?.url, index: key }))
   }
   return (
      <>
         <div className='PlayerContent'>
            <div className='Player_Warper'>
               <p>{!selectedSong ? list[0]?.name : selectedSong?.name || 'select Album'}</p>
               <audio src={!selectedSong ? list[0]?.URL : selectedSong?.URL} ref={song} />
               {
                  selectedSong.length > 0 ? <h3>Select Song</h3> : <>
                     <BsSkipBackward onClick={() => backwordsong(selectedSong?.index)} />
                     {
                        !isplaying ? <BsCaretRight onClick={() => dispatch(setisplaying(true))} /> : <BsPause onClick={() => dispatch(setisplaying(false))} />
                     }
                     <BsSkipForward onClick={() => forwordsong(selectedSong?.index)} /> </>
               }
            </div>
         </div>

      </>
   )
}

export default Player
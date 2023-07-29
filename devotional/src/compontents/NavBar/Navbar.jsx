import React from 'react'
import './NavBar.scss'
import { BsMusicNoteList } from "react-icons/bs";
export default function Navbar() {
   return (
      <div id='NavBar'>
         <nav className='Nav_container'>
            <ul>
               <li>
                  <BsMusicNoteList />
                  <span>loard Surya</span>
               </li>
               <li>
                  <BsMusicNoteList />
                  <span>loard shiva</span>
               </li>
               <li>
                  <BsMusicNoteList />
                  <span>loard Ganapati</span>
               </li>
               <li>
                  <BsMusicNoteList />
                  <span>loard Lakshmi</span>
               </li>
               <li>
                  <BsMusicNoteList />
                  <span>loard Saibaba</span>
               </li>
               <li>
                  <BsMusicNoteList />
                  <span>loard Hanuman</span>
               </li>
               <li>
                  <BsMusicNoteList />
                  <span>loard Durga</span>
               </li>
            </ul>
         </nav>
      </div>
   )
}

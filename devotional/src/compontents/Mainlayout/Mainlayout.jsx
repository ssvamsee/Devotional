import React from 'react'
import { content } from '../../Content/Data'
import './Mainlayout.css'

export default function Mainlayout() {
   return (
      <>
         <div className='main_container'>
            <div className='Main_warpper'>
               <ul className='Music_list'>
                  {
                     content?.map((data, i) => {
                        return (
                           <li key={i}>
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
            </div>
         </div>
      </>
   )
}

import { Button } from 'antd'
import React, { useState } from 'react'


function NavBar(props) {

  return (
    
  <div>
   <div className={`h-20 max-w-full  flex justify-between align-middle border-2 shadow-2xl  border-neutral-400`} >
    <div className="logo p-5 font-bold text-3xl text-yellow-500 body-font font-Alkatra ">Text Utility</div>
    <Button className='text-center m-5 text-yellow-500 font-bold' onClick={props.toggleDarkMode} >{props.mode}</Button>
   </div>
   
   </div>
  )
}

export default NavBar
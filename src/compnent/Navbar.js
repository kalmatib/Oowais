import React, { useRef } from 'react'
import  './navbar.css'
import logo from'../../src/Component/assets/logo.jpeg'

import menu from'../Component/assets/menu.jpg'
import download from './assets/download.png'
export default function Navbar() {
  const menuRef = useRef();
  const open = ()=>{
    menuRef.current.style.right="0"
  }
  const close = ()=>{
    menuRef.current.style.right="-350px"
  }
  return (
    <div className='Navbar'>
      <img className='img' src={logo} alt=''/>
      <img className='open' src={menu} alt='' onClick={open}/>
      
    <ul ref={menuRef} className='nav-menu'>
    <img className='close' src={download} alt='' onClick={close}/>
    
      <li><a className='anchor-link' offset={50} href='#home'>Home</a></li>
      <li><a className='anchor-link' offset={50} href='#About'>About</a></li>      
      
      <li><a className='anchor-link' offset={50} href='#contact'>Contact</a></li>
    </ul>
    <div className='Nav-connect'><a className='anchor-link' offset={50} href='#contact'> Connect with Me</a>
     
    </div>


    </div>
  )
}

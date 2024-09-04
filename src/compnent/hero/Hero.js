import React from 'react'
import'./Hero.css'
import  Profile from '../../Component/Hero/profile.jpg'


export default function Hero() {
  return (
    <div id='home' className='hero'>
      <img className='img-1' src={Profile} alt=''/>
      <h1><span>I'm Owais,</span> fronted developer based in PAKISTAN.</h1>
      <p>"Owais is a skilled front-end developer based in Pakistan, specializing in crafting intuitive and responsive user interfaces that elevate digital experiences. With expertise in HTML, CSS, JavaScript, and like React and Bootstrap, Owais brings creativity and technical prowess to every project he undertakes."
      </p>
      <div className='hero-action'>
        <div className='hero-connect'><a className='anchor-link' offset={50} href='#contact'>Connect with Me</a></div>
        
      </div>
    </div>
  )
}

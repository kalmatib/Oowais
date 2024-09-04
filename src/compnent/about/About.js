import React from 'react'
import './About.css'
import  Profile from '../../Component/Hero/profile.jpg'

export default function About() {
  return (
    <div id='About' className='about'>
      <div className='about-tittle'>
        <h1>About</h1>
      </div>
      <div className='about-section'>
        <div className='about-left'>
            <img className='img-2' src={Profile} alt=''/>
        </div>
        <div className='about-right'>
            <div className='about-para'>
                <p>"As a web development student with six months of training, I have successfully completed two projects, applying my skills  to build functional and responsive web applications, and I'm excited to continue learning and creating!"
                </p>
                
            </div>
            <div className='about-skills'>
            <div className='about-skill'>
                <p>HTML and CSS</p><hr style={{width:"50%"}}/>
                </div>
                <div className='about-skill'>
                <p>React Js</p><hr style={{width:"70%"}}/>
                </div>
                <div className='about-skill'>
                <p>JavaScript</p><hr style={{width:"60%"}}/>
                </div>
            </div>
        </div>
      </div>
      <div className='about-achievements'>
      <div className='about-achievement'>
        <h1>6+</h1>
        <p>Month of Experience</p>
        </div>
        <hr/>
        <div className='about-achievement'>
        <h1>2+</h1>
        <p>Project Completed</p>
        </div>
        <hr/>
      </div>
    </div>
  )
}

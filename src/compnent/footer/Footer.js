import React from 'react'
import './Footer.css'

import user from '../../Component/assets/user.png'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                  
                    <p>I am a fronted developer from,Pakistan.I'm currently avaliable to take a new project. You are contact anytime.</p>
                </div>
                <div className='footer-top-right'>
                    <div className='footer-email-input'>
                    
                    <img src={user}  alt=''/>
                    <input type='email' placeholder='Enter your email'/>
                    </div>
                    <div className='footer-subscribe'>
                       Subscribe 
                    </div>
                </div>
            </div>
           <hr/>
           <div className='footer-bottom'>
            <p className='footer-bottom-left'> @ 2024 Owais.All rights reserved</p>
           
           <div className='footer-bottom-right'>
            <p>Term of Sevices</p>
            <p> Privacy Policy</p>
            <p>Connect with me</p>
           </div>
           </div>
        </div>
    )
}

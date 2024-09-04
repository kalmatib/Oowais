import React,{useState} from 'react'
import './Contact.css'
import mail from'../../Component/assets/mail.png'
import location from'../../Component/assets/location.jpg'
import call from'../../Component/assets/call.png'
export default function Contact() {
  
    // State hooks for form data
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    // Update state when form inputs change
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can process formData here (e.g., send it to a server)
      console.log('Form submitted:', formData);
      // Clear the form (optional)
      setFormData({
        name: '',
        email: '',
        message: ''
  
      });
      if(formData){
        alert('Form submitted');
      }
    };
  

  return (
    <div id='contact' className='contact'>
      <div className='contact-tittle'>
        <h1>Get in touch</h1>
      </div>
      <div className='contact-section'>
      <div className='contact-left'>
        <h1>Let's talk</h1>
        <p>I'm currently avaliable to take a new project, so feel free to send me a message about anything that you want on. You contact anytime.</p>
        <div className='contact-details'>
        <div className='contact-detail'>
          <img src={mail} alt=''/><p>balochowais242@gmail.com</p>
          </div>
          <div className='contact-detail'>
          <img src={call} alt=''/><p>03702079568</p>
          </div>
          <div className='contact-detail'>
          <img src={location} alt=''/><p>Pakistan,Karachi</p>
          </div>
        </div>
        </div>
        <div >
        <form onSubmit={handleSubmit} className='contact-right'>
      <label htmlFor='name'>Your Name</label>
      <input
        type='text'
        placeholder='Enter your name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor='email'>Enter Email</label>
      <input
        type='email'
        placeholder='Enter your email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor='message'>Write your message here</label>
      <textarea
        name='message'
        rows={8}
        placeholder='Enter your message'
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type='submit' className='contact-submit'>Submit now</button>
    </form>

        </div>
      </div>
      
    </div>
  )
};
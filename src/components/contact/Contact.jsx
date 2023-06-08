import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import swal from 'sweetalert'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_2homluq', 'template_qi8lf7a', form.current, 'JTqrTQB8Z-nQ48-b3')
    e.target.reset()
    swal("Thank you!", "Message Successfully Sent!", "success");
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>makhmudov4744@list.ru</h5>
            <a href="mailto:makhmudov4744@list.ru" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <CiLinkedin className="contact__option-icon"/>
            <h4>Linkedin</h4>
            <h5>Linkedin profile</h5>
            <a href="https://www.linkedin.com/in/nodirbek-makhmudov-161a371bb" target="_blank" rel="noreferrer">Go to profile</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+998993764744</h5>
            <a href="https://wa.me/998993764744" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* --END OF CONTACT OPTIONS-- */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
import React from 'react'
import './header.css'
import CV from '../../assets/cv.pdf'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Makhmudov Nodirbek</h1>
        <h5 className="text-light">Front-End Developer</h5>
      <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      <div className='container welcome-p-cont'>
        <p>Welcome to my portfolio! I specialize in creating beautiful, responsive, 
        and user-friendly websites that are optimized for both desktop and mobile devices. With a passion 
        for design and a strong technical background, I strive to deliver high-quality work that meets and exceeds 
        the expectations of my clients. Take a look at my portfolio and see for yourself what I can do. 
        Let's work together to create something amazing!</p>
      </div>
      <div className="scroll-down-cont">
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/nodirbek-makhmudov-161a371bb" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin" aria-hidden="true"/> </a>
        <a href="https://github.com/nbn2000" target='_blank' rel="noreferrer"><i className="fa-brands fa-github" aria-hidden="true"/> </a>
        <a href="mailto:makhmudov4744@list.ru" target='_blank' rel="noreferrer"><i className="fa fa-envelope" aria-hidden="true"/> </a>
      </div>
      </div>
    </header>
  )
}

export default Header
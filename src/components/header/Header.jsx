import React from 'react'
import './header.css'
import CV from '../../assets/cv.pdf'
import ME from '../../assets/me.png'

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
      <div className="me">
        <img src={ME} alt="me" />
      </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
      <div className="header__socials">
        <a href="https://linkedin.com" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin" aria-hidden="true"/> </a>
        <a href="https://github.com" target='_blank' rel="noreferrer"><i className="fa-brands fa-github" aria-hidden="true"/> </a>
        <a href="https://makhmudov.list.com" target='_blank' rel="noreferrer"><i className="fa fa-envelope" aria-hidden="true"/> </a>
      </div>
    </header>
  )
}

export default Header
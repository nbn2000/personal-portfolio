import React from 'react'
import './footer.css'


function Footer() {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Nodirbek Makhmudov</a>

      <ul className='permalinks'>
        <li><a href="#/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/nodirbek-makhmudov-161a371bb" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin" aria-hidden="true"/> </a>
        <a href="https://github.com/nbn2000" target='_blank' rel="noreferrer"><i className="fa-brands fa-github" aria-hidden="true"/> </a>
        <a href="https://wa.me/998993764744" target='_blank' rel="noreferrer"><i className="fa-brands fa-whatsapp" aria-hidden="true"/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Makhmudov Nodirbek. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
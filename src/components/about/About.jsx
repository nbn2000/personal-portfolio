import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads 
            to the success of the overall product. Check out some of my work in the Portfolio section.</p>
          <p>I also like sharing content related to the stuff that I have learned over the years in Web 
              Development so it can help other people of the Dev Community.</p>
          <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity 
            that matches my skills and experience then don't hesitate to contact me.</p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About 
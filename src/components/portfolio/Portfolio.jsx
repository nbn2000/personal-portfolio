import React from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'
import IMG1 from '../../assets/questionnaireWeb.png'
import IMG2 from '../../assets/githubFinder.png'
import IMG3 from '../../assets/calculator.png'
import IMG4 from '../../assets/25-5-clock.png'
import IMG5 from '../../assets/randomQuoteMachine.png'
import IMG6 from '../../assets/markDownViewer.png'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>Questionnaire Web</h3>
          <div className="portfolio__item-cta">
          <Link to="/project-1" className="btn btn-primary" target='_blank' rel="noreferrer">Case Study</Link>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio-image">
            <img src={IMG2} alt="img2" />
          </div>
          <h3>Github Finder</h3>
          <div className="portfolio__item-cta">
          <Link to="/project-2" className="btn btn-primary" target='_blank' rel="noreferrer">Case Study</Link>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio-image">
            <img src={IMG3} alt="img3" />
          </div>
          <h3>Simple Culculator</h3>
          <div className="portfolio__item-cta">
          <Link to="/project-3" className="btn btn-primary" target='_blank' rel="noreferrer">Case Study</Link>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio-image">
            <img src={IMG4} alt="img4" />
          </div>
          <h3>25 + 5 Clock</h3>
          <div className="portfolio__item-cta">
          <Link to="/project-4" className="btn btn-primary" target='_blank' rel="noreferrer">Case Study</Link>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio-image">
            <img src={IMG5} alt="img5" />
          </div>
          <h3>Random Quote Machine</h3>
          <div className="portfolio__item-cta">
          <Link to="/project-5" className="btn btn-primary" target='_blank' rel="noreferrer">Case Study</Link>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio-image">
            <img src={IMG6} alt="img6" />
          </div>
          <h3>Markdown Previewer</h3>
          <div className="portfolio__item-cta">
          <Link to="/project-6" className="btn btn-primary" target='_blank' rel="noreferrer">Case Study</Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
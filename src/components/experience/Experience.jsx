import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const skills = [
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  { name: "Bootstrap", level: "Experienced" },
  { name: "React-Redux", level: "Experienced" },
  { name: "React", level: "Experienced" },
  { name: "Sass", level: "Intermediate" },
  { name: "GIT", level: "Experienced" },
  { name: "Jquery", level: "Intermediate" },
  { name: "GitHub", level: "Experienced" },
  { name: "Responsive Design", level: "Intermediate" },
  { name: "SEO", level: "Experienced" },
];

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {
              skills.map((skill) => (
                <article className="experience__details" key={skill.name}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
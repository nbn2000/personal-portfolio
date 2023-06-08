import React, { useState } from 'react'
import './projects.css'
import IMG1 from '../../assets/questionnaireWeb.png'
import IMGQW2 from '../../assets/questionnaireWeb-2.png'
import IMGQW3 from '../../assets/questionnaireWeb-3.png'
import IMG2 from '../../assets/githubFinder.png'
import IMG2GF from '../../assets/githubFinder-2.png'
import IMG3 from '../../assets/calculator.png'
import IMG4 from '../../assets/25-5-clock.png'
import IMG5 from '../../assets/randomQuoteMachine.png'
import IMG6 from '../../assets/markDownViewer.png'

export const Project_1 = () => {
  const [bool, setBool] = useState(2)

  const toggleActive = (arg) => {
      setBool(arg)
  }
  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero-content">
          <h1 className="project-details__content-title project-name">Questionnaire Web</h1>
          <div className="project-cs-hero-info">
            <p>
              This page contains the case study of Questionnaire Web Website which includes the Project
              Overview, Tools Used, Project Code and Live Links to the official product.
            </p>
          </div>
          <div className="project-cs-hero-cta">
            <a href="https://github.com/nbn2000/questionnaire-web" className="btn" target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://questionnaire-web-2000.netlify.app/register" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>
      </section>
      <section>
        <div className="main-container">
          <div className="project-details__content">
            <div className="portfolio__item-image project-cs-hero-info">
              <img src={IMGQW2} alt="Project Image 1" className={bool === 1 ? "project-img project-active" : "project-img"} onClick={() => toggleActive(1)}/>
              <img src={IMG1} alt="Project Image 2" className={bool === 2 ? "project-img project-active" : "project-img"} onClick={() => toggleActive(2)}/>
              <img src={IMGQW3} alt='Project Image 3' className={bool === 3 ? "project-img project-active" : "project-img"} onClick={() => toggleActive(3)}/>
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h2 className="project-details__content-title">Project Overview</h2>
                <p className="project-details__desc-para">
                Introducing "Questionnaire Web" - a dynamic front-end project designed to facilitate quizzes or gather valuable feedback from customers. 
                This user-friendly web application offers a seamless experience for both customers and administrators.
                </p>
                <p className="project-details__desc-para">
                Upon accessing the website, users are greeted with a registration form. For regular users, 
                they simply need to input their phone number to proceed. However, administrators have the option to enter an 
                admin password instead. After registration, users are directed to the quiz section. By The Way for admin password is <strong>admin12345</strong>. However it can be customized.
                </p>
                <p className="project-details__desc-para">
                The quiz section presents users with a series of questions and multiple-choice variants. 
                Users have the flexibility to select more than one answer for each question. 
                Once the questions have been answered, users are prompted to choose from three available operators. 
                After submitting their responses, users are redirected to a gratitude-filled "Thank You" page.
                </p>
                <p className="project-details__desc-para">
                "Questionnaire Web" aims to cater to a diverse user base by providing support for two languages: 
                Uzbek and Russian. Users can effortlessly switch between these languages by clicking on the language 
                selection option located at the top of the navigation bar.
                </p>
                <p className="project-details__desc-para">
                Furthermore, the project includes an admin panel that offers customization capabilities. 
                Within the customization page, administrators can find two containers, each representing the Uzbek and Russian 
                languages. These containers provide the ability to modify questions, add new ones, delete existing questions, 
                and manage variants.
                </p>
                <p className="project-details__desc-para">
                In addition, the admin panel features an answers list page that showcases the submissions received from users. 
                The table-based content within this page is intelligently sorted based on the operators selected by users during 
                their answer submissions. The table includes columns for operators and phone numbers. Clicking on a 
                phone number redirects administrators to a detailed user item page. This page provides a comprehensive overview of 
                the user's submission data, including the specific questions and answers.
                </p>
                <p className="project-details__desc-para">
                While the front-end development has been successfully implemented, 
                there remains a backend aspect to be completed for the project. 
                This pending task will further enhance the functionality and live data influence flow of "Questionnaire Web."
                </p>
                <p className="project-details__desc-para">
                With its intuitive user interface, multi-language support, and comprehensive admin panel, 
                "Questionnaire Web" offers a versatile platform for conducting quizzes or feedbacks from clients,  
                and efficiently managing the customization and administration aspects of the application.
                </p>
                <p className="project-details__desc-para">
                  Feel free to check out the Project by visiting the Project Link.
                </p>
              </div>
              <div className="project-details__tools-used">
                <h2 className="project-details__content-title">Tools Used</h2>
                <div className="skills">
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">CSS</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">React</div>
                  <div className="skills__skill">GIT</div>
                  <div className="skills__skill">Github</div>
                </div>
              </div>
              <div className="project-details__links">
                <h2 className="project-details__content-title">See Live</h2>
                <a href="https://github.com/nbn2000/questionnaire-web" className="btn see-live-a" target='_blank' rel="noreferrer">GitHub</a>
                <a href="https://questionnaire-web-2000.netlify.app/register" className="btn btn-primary see-live-a" target='_blank' rel="noreferrer">Live Demo</a>
              </div>
              <a href="/" className="btn">Go Back</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const Project_2 = () => {
  const [bool, setBool] = useState(2)

  const toggleActive = (arg) => {
      setBool(arg)
  }
  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero-content">
          <h1 className="project-details__content-title project-name">Github Finder</h1>
          <div className="project-cs-hero-info">
            <p>
              This page contains the case study of Github Finder Website which includes the Project
              Overview, Tools Used, Project Code and Live Links to the official product.
            </p>
          </div>
          <div className="project-cs-hero-cta">
            <a href="https://github.com/nbn2000/github-finder" className="btn" target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://github-finder-2000.netlify.app/" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>
      </section>
      <section>
        <div className="main-container">
          <div className="project-details__content">
            <div className="portfolio__item-image project-cs-hero-info">
              <img src={IMG2} alt="Project Image 1" className={bool === 1 ? "project-img project-active" : "project-img"} onClick={() => toggleActive(1)}/>
              <img src={IMG2GF} alt="Project Image 2" className={bool === 2 ? "project-img project-active" : "project-img"} onClick={() => toggleActive(2)}/>
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h2 className="project-details__content-title">Project Overview</h2>
                <p className="project-details__desc-para">
                Introducing "GitHub Finder" - a dynamic, responsive, and user-friendly website that simplifies the 
                process of finding and exploring users on GitHub. This web application allows users to effortlessly 
                search for any GitHub user using the convenient search bar.
                </p>
                <p className="project-details__desc-para">
                Upon entering a search query, the website quickly fetches and displays relevant 
                information about the user, including their avatar and username. 
                For a more detailed overview of the selected user, simply click the "More" button.
                </p>
                <p className="project-details__desc-para">
                The "More" button directs users to a dedicated page showcasing comprehensive information about the specific 
                GitHub user. This page includes details such as the user's avatar, username, location, website, and even their 
                hireability status. Additionally, users can view the user's last five repositories, the number of followers and 
                following, and the total count of repositories they have. And more.
                </p>
                <p className="project-details__desc-para">
                The inspiration behind "GitHub Finder" comes from observing similar projects and building upon their successes. 
                With a strong focus on security, the website ensures a safe browsing experience for users. It incorporates alerts 
                to notify users of any potential security concerns, creating a trustworthy environment.
                </p>
                <p className="project-details__desc-para">
                The design of "GitHub Finder" prioritizes responsiveness to ensure a seamless experience across various 
                devices and screen sizes. Whether accessing the website from a desktop computer, tablet, or mobile device, 
                users can expect consistent and intuitive functionality.
                </p>
                <p className="project-details__desc-para">
                Moreover, great emphasis has been placed on enhancing the overall user experience. "GitHub Finder" has been 
                meticulously crafted to provide a smooth and enjoyable journey for users, from the initial search to the detailed 
                user information page.
                </p>
                <p className="project-details__desc-para">
                By combining functionality, security, responsiveness, and an exceptional user experience, "GitHub Finder" stands out 
                as a valuable tool for anyone looking to explore GitHub users and their repositories.
                </p>
                <p className="project-details__desc-para">
                  Feel free to check out the Project by visiting the Project Link.
                </p>
              </div>
              <div className="project-details__tools-used">
                <h2 className="project-details__content-title">Tools Used</h2>
                <div className="skills">
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">CSS</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">React</div>
                  <div className="skills__skill">Redux</div>
                  <div className="skills__skill">Axios</div>
                  <div className="skills__skill">GIT</div>
                  <div className="skills__skill">Github</div>
                </div>
              </div>
              <div className="project-details__links">
                <h2 className="project-details__content-title">See Live</h2>
                <a href="https://github.com/nbn2000/github-finder" className="btn see-live-a" target='_blank' rel="noreferrer">GitHub</a>
                <a href="https://github-finder-2000.netlify.app/" className="btn btn-primary see-live-a" target='_blank' rel="noreferrer">Live Demo</a>
              </div>
              <a href="/" className="btn">Go Back</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const Project_3 = () => {

  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero-content">
          <h1 className="project-details__content-title project-name">Simple Culculator</h1>
          <div className="project-cs-hero-info">
            <p>
              This page contains the case study of Simple Culculator Website which includes the Project
              Overview, Tools Used, Project Code and Live Links to the official product.
            </p>
          </div>
          <div className="project-cs-hero-cta">
            <a href="https://github.com/nbn2000/FCC-Calculator" className="btn" target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://caclulator-12345.netlify.app/" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>
      </section>
      <section>
        <div className="main-container">
          <div className="project-details__content">
            <div className="portfolio__item-image-1 project-cs-hero-info-1">
              <img src={IMG3} alt="Project Image 1" className="project-img project-active"/>
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h2 className="project-details__content-title">Project Overview</h2>
                <p className="project-details__desc-para">
                This project is a simple calculator built using React. It can perform basic arithmetic operations with addition, 
                subtraction, multiplication, and division. The calculator is visually appealing and responsive, 
                and is a showcase of the developer's proficiency in front-end development.
                </p>
                <p className="project-details__desc-para">
                Project purpose to build is to pass from Free Code Camp tests by doing that to improve logical thinking, 
                getting experience and more. I have left CDN link for testing environment from FCC, if you would like to test you can 
                click menu and choose project name then click run tests.
                </p>
                <p className="project-details__desc-para">
                  Feel free to check out the Project by visiting the Project Link.
                </p>
              </div>
              <div className="project-details__tools-used">
                <h2 className="project-details__content-title">Tools Used</h2>
                <div className="skills">
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">CSS</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">React</div>
                  <div className="skills__skill">Bootstrap</div>
                  <div className="skills__skill">GIT</div>
                  <div className="skills__skill">Github</div>
                </div>
              </div>
              <div className="project-details__links">
                <h2 className="project-details__content-title">See Live</h2>
                <a href="https://github.com/nbn2000/FCC-Calculator" className="btn see-live-a" target='_blank' rel="noreferrer">GitHub</a>
                <a href="https://caclulator-12345.netlify.app/" className="btn btn-primary see-live-a" target='_blank' rel="noreferrer">Live Demo</a>
              </div>
              <a href="/" className="btn">Go Back</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const Project_4 = () => {
  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero-content">
          <h1 className="project-details__content-title project-name">25 + 5 Clock</h1>
          <div className="project-cs-hero-info">
            <p>
              This page contains the case study of 25 + 5 Clock Website which includes the Project
              Overview, Tools Used, Project Code and Live Links to the official product.
            </p>
          </div>
          <div className="project-cs-hero-cta">
            <a href="https://github.com/nbn2000/25-5-clock" className="btn" target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://25-5-clock.netlify.app/" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>
      </section>
      <section>
        <div className="main-container">
          <div className="project-details__content">
            <div className="portfolio__item-image-1 project-cs-hero-info-1">
              <img src={IMG4} alt="Project Image 1" className="project-img project-active"/>
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h2 className="project-details__content-title">Project Overview</h2>
                <p className="project-details__desc-para">
                This project is a time management program built with a focus on user experience. 
                It allows users to set session and break lengths with customizable maximums and minimums. 
                The program signals the end of each session or break with an alarm. The clock is visually appealing and 
                responsive, showcasing the developer's proficiency in creating functional and user-friendly web applications.
                </p>
                <p className="project-details__desc-para">
                Project purpose to build is to pass from Free Code Camp tests by doing that to improve logical thinking, 
                getting experience and more. I have left CDN link for testing environment from FCC, if you would like to test you can 
                click menu and choose project name then click run tests.
                </p>
                <p className="project-details__desc-para">
                  Feel free to check out the Project by visiting the Project Link.
                </p>
              </div>
              <div className="project-details__tools-used">
                <h2 className="project-details__content-title">Tools Used</h2>
                <div className="skills">
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">CSS</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">React</div>
                  <div className="skills__skill">Bootstrap</div>
                  <div className="skills__skill">GIT</div>
                  <div className="skills__skill">Github</div>
                </div>
              </div>
              <div className="project-details__links">
                <h2 className="project-details__content-title">See Live</h2>
                <a href="https://github.com/nbn2000/25-5-clock" className="btn see-live-a" target='_blank' rel="noreferrer">GitHub</a>
                <a href="https://25-5-clock.netlify.app/" className="btn btn-primary see-live-a" target='_blank' rel="noreferrer">Live Demo</a>
              </div>
              <a href="/" className="btn">Go Back</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const Project_5 = () => {
  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero-content">
          <h1 className="project-details__content-title project-name">Random Quote Machine</h1>
          <div className="project-cs-hero-info">
            <p>
              This page contains the case study of Random Quote Machine Website which includes the Project
              Overview, Tools Used, Project Code and Live Links to the official product.
            </p>
          </div>
          <div className="project-cs-hero-cta">
            <a href="https://github.com/nbn2000/Random-Quote-Machine" className="btn" target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://random-quote-machine-123.netlify.app/" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>
      </section>
      <section>
        <div className="main-container">
          <div className="project-details__content">
            <div className="portfolio__item-image-1 project-cs-hero-info-1">
              <img src={IMG5} alt="Project Image 1" className="project-img project-active"/>
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h2 className="project-details__content-title">Project Overview</h2>
                <p className="project-details__desc-para">
                This project is a Random Quote Machine that displays random quotes on a webpage. 
                It uses an API to fetch and display the quotes, and features a button that generates a new random quote when 
                clicked. The Random Quote Machine is visually appealing and responsive, and demonstrates the developer's 
                proficiency in using APIs to create interactive and dynamic web applications.
                </p>
                <p className="project-details__desc-para">
                Project purpose to build is to pass from Free Code Camp tests by doing that to improve logical thinking, 
                getting experience and more. I have left CDN link for testing environment from FCC, if you would like to test you can 
                click menu and choose project name then click run tests.
                </p>
                <p className="project-details__desc-para">
                  Feel free to check out the Project by visiting the Project Link.
                </p>
              </div>
              <div className="project-details__tools-used">
                <h2 className="project-details__content-title">Tools Used</h2>
                <div className="skills">
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">CSS</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">React</div>
                  <div className="skills__skill">Bootstrap</div>
                  <div className="skills__skill">GIT</div>
                  <div className="skills__skill">Github</div>
                </div>
              </div>
              <div className="project-details__links">
                <h2 className="project-details__content-title">See Live</h2>
                <a href="https://github.com/nbn2000/Random-Quote-Machine" className="btn see-live-a" target='_blank' rel="noreferrer">GitHub</a>
                <a href="https://random-quote-machine-123.netlify.app/" className="btn btn-primary see-live-a" target='_blank' rel="noreferrer">Live Demo</a>
              </div>
              <a href="/" className="btn">Go Back</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const Project_6 = () => {
  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero-content">
          <h1 className="project-details__content-title project-name">Markdown Previewer</h1>
          <div className="project-cs-hero-info">
            <p>
              This page contains the case study of Markdown Previewer Website which includes the Project
              Overview, Tools Used, Project Code and Live Links to the official product.
            </p>
          </div>
          <div className="project-cs-hero-cta">
            <a href="https://github.com/nbn2000/Markdown-Previewer" className="btn" target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://markdown-previewer-12345.netlify.app/" className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </div>
      </section>
      <section>
        <div className="main-container">
          <div className="project-details__content">
            <div className="portfolio__item-image-1 project-cs-hero-info-1">
              <img src={IMG6} alt="Project Image 1" className="project-img project-active"/>
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h2 className="project-details__content-title">Project Overview</h2>
                <p className="project-details__desc-para">
                This project is a Markdown Previewer built using a 'markedjs' library. It features a textarea and a display 
                that shows the inputted data. The display converts the inputted text into formatted Markdown based on the 
                'markedjs' instructions. The Markdown Previewer is visually appealing and responsive, and demonstrates the 
                developer's proficiency in using 'markedjs' to create a functional and user-friendly interface.
                </p>
                <p className="project-details__desc-para">
                Project purpose to build is to pass from Free Code Camp tests by doing that to improve logical thinking, 
                getting experience and more. I have left CDN link for testing environment from FCC, if you would like to test you can 
                click menu and choose project name then click run tests.
                </p>
                <p className="project-details__desc-para">
                  Feel free to check out the Project by visiting the Project Link.
                </p>
              </div>
              <div className="project-details__tools-used">
                <h2 className="project-details__content-title">Tools Used</h2>
                <div className="skills">
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">CSS</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">React</div>
                  <div className="skills__skill">Bootstrap</div>
                  <div className="skills__skill">GIT</div>
                  <div className="skills__skill">Github</div>
                </div>
              </div>
              <div className="project-details__links">
                <h2 className="project-details__content-title">See Live</h2>
                <a href="https://github.com/nbn2000/Markdown-Previewer" className="btn see-live-a" target='_blank' rel="noreferrer">GitHub</a>
                <a href="https://markdown-previewer-12345.netlify.app/" className="btn btn-primary see-live-a" target='_blank' rel="noreferrer">Live Demo</a>
              </div>
              <a href="/" className="btn">Go Back</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

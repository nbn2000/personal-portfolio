import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Project_1, Project_2, Project_3, Project_4, Project_5, Project_6 } from './components/projects/Projects'


const App = () => {
  return (
    <Router>   
      <Routes>
      <Route path="/" element={<>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
        </>} />
      <Route path='/project-1' element={<Project_1 />} />
      <Route path='/project-2' element={<Project_2 />} />
      <Route path='/project-3' element={<Project_3 />} />
      <Route path='/project-4' element={<Project_4 />} />
      <Route path='/project-5' element={<Project_5 />} />
      <Route path='/project-6' element={<Project_6 />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
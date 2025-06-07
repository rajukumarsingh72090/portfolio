import React from 'react'
import Info from '../../components/Info'
import Stat from '../../components/Stat'
import { FaDownload } from 'react-icons/fa'
import Resume from '../../assets/raju_resume.pdf'
import Skills from '../../components/Skills'  
import { resume } from '../../Data'
import ResumItem from '../../components/ResumItem'
import "./about.css"

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Info </h3>
            <ul className="info__list grid">
              <Info/>
            </ul>

            <a href={Resume} download='' className="button">Download CV<span className="button__icon">
              <FaDownload/>
              </span></a>
          </div>

          <div className="stats grid">
            <Stat/>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center"> My skills</h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Experience & Education 
        </h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) =>{
              if(val.category === 'experience'){
                return <ResumItem key={val.id} {...val}/>
              }
            })}
          </div>

          <div className="resume__data">
            {resume.map((val) =>{
              if(val.category === 'education'){
                return <ResumItem key={val.id} {...val}/>
              }
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
import React from 'react'
import Info from '../../components/Info'
import Stat from '../../components/Stat'
import { FaDownload } from 'react-icons/fa'
import Resume from '../../assets/raju_resume.pdf'

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
    </main>
  )
}

export default About
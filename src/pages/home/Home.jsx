import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

const Home = () => {
  return (
   <section className="home section grid">
    <img src={Profile} alt='' className='home__img'/>

    <div className="home__content">
      <div className="home__data">
        <h1 className="home__title">
          <span>I'm Raju Kumar Singh</span> A software developer
        </h1>

        <p className="home__description">
          I am a self taught software developer especialized in javascript and their libraries and framework. I love to explore and learn new technology.
        </p>

        <Link to='/about' className='button'> More about me{' '} <span className='button__icon'><FaArrowRight/></span> </Link>
      </div>
    </div>
    
    <div className="color__block"></div>
   </section>
  )
}

export default Home
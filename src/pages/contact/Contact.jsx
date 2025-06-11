import React from 'react'

import {FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaEnvelopeOpen} from 'react-icons/fa'

import { FiSend } from 'react-icons/fi'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get in <span> Touch </span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Feel free to reach out</h3>

          <p className="contact__description">If you like my resume and want to assign any work please feel free to reach out to me.</p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>

              <div>
                <span className="info__title">Mail me :</span>
                <h4 className="info__desc">rajukukmarsingh72090@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>

              <div>
                <span className="info__title">call me :</span>
                <h4 className="info__desc">+91 7209078494</h4>
              </div>
            </div>

          </div>

          <div className="contact__socials">
            <a href="https://www.facebook.com/profile.php?id=61574002713772" className="contact__social-link"><FaFacebookF/></a>

            <a href="https://x.com/RajuKumarS69018" className="contact__social-link"><FaTwitter/></a>

            <a href="https://www.youtube.com/@instacreatorvidoes" className="contact__social-link"><FaYoutube/></a>

            <a href="https://www.instagram.com/techexplorarguy/" className="contact__social-link"><FaInstagram /></a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">

            <div className="form__input-div">
              <input type="text" placeholder='your name' className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="email" placeholder='your email' className="form__control" />
            </div>

            <div className="form__input-div">
              <input type="text" placeholder='your subject' className="form__control" />
            </div>
          </div>

          <div className="form__input-div">
             <textarea placeholder='your message' className="form__control textarea"></textarea>
            </div>

          <button className="button"> send message
            <span className="button__icon contact__button-icon"><FiSend/></span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
import React from 'react'
import { PersonalInfo } from '../Data'

const info = () => {
  return (
    <>
    {PersonalInfo.map(({title, description}, index) => {
      return(
        <li className="info__item" key={index}>
          <span className="info__title">{title}</span>
          <span className="info__description">{description}</span>
        </li>
      )
    })}
    </>
  )
}

export default info
import React from 'react'
import { portfolio } from '../../Data'
import PortfolioItem from '../../components/PortfolioItem'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">my <span>Portfolio </span></h2>

      <div className="portfolio__container grid">
        {portfolio.map((item) =>{
          return <PortfolioItem key={item.id}  {...item}/>
        })}
      </div>
    </section>
  )
}

export default Portfolio
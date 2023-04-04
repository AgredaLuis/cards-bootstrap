import React from 'react'
import PropTypes from 'prop-types'

import './cards.css'



const Card = ({title, imageSource,text, url}) => {
  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
        <div className='overflow'>
        <img src={imageSource} alt="source-img" className='card-img-top ' />
        </div>
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secundary'>
              {
                text ? text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, labore, molestias praesentium voluptas ipsam atque magni, voluptatem repellendus autem vitae aut quidem hic alias libero iure! Sed obcaecati necessitatibus quas."
              }
            </p>
            <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank">
              Go to this website  
            </a>
        </div>
    </div>
  )
}

//proptypes para cuando no reciba una propiedad mande un mensaje a la consola
Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string
}

export default Card
import React from 'react'
import imgdance from './imagenes/imgdance.jpg';
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <Link to= {`/bailarines`}>
    <>
    <div className='m-10 centrar'> COMPAÑIA DREAM</div>
    <div className="carousel rounded-box">
  <div className="carousel-item">
    <img src={imgdance} alt="danza" />
  </div> 
  <div className="carousel-item">
  <img src={imgdance} alt="danza" />
  </div> 
  <div className="carousel-item">
  <img src={imgdance} alt="danza" />
  </div> 
  <div className="carousel-item">
  <img src={imgdance} alt="danza" />
  </div> 
  <div className="carousel-item">
  <img src={imgdance} alt="danza" />
  </div> 
  <div className="carousel-item">
  <img src={imgdance} alt="danza" />
  </div> 
  <div className="carousel-item">
  <img src={imgdance} alt="danza" />
  </div>
</div>
    </>
    </Link>
  )
}

export default Main
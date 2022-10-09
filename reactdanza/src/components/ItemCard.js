import React from 'react'
import { Link } from 'react-router-dom'
import ItemList from './ItemList'

const ItemCard = ({name,id}) => {
  return (
    <Link to= {`/bailarines/item/${id}`} >
    <div className='flexContainer'>
    <div className='flexCaja'>
    <div className= 'centrar'>
    <div className='m-4' >{name}</div>
    </div>
    </div>
    </div>
    </Link>

  )
}

export default ItemCard
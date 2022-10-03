import React from 'react'
import { Link } from 'react-router-dom'
import ItemList from './ItemList'

const ItemCard = ({name,edad,id}) => {
  return (
    <Link to= {`/bailarines/item/${id}`} >
    <div className= 'centrar'>
    <div className='m-4'>{name}</div>
    <div className='m-4' > Edad: {edad}</div>
    </div>
    </Link>

  )
}

export default ItemCard
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { bailarines } from './ItemList'




const ItemDetail = () => {

   const {id : itemId} = useParams ()
  
   const [item, setItem] = useState({})

   useEffect(() => {
    getItemDetails().then ( response => {
        setItem(response)

    })
   }, [])

   const getItemDetails = () => {

    return new Promise((resolve) => {
       setTimeout(() => {
           resolve(bailarines.find (b => b.id === Number(itemId)))

       },2000);
   })

  }
   
  return (
    
    <>
    <div>
    <div className='flexContainer2'>
    <div className='flexCaja2'>
    <div className='centrar'>{item.name}</div>
    <div className='centrar'> Edad:</div>
    <div className='centrar'>{item.edad}</div>
    <div className='centrar'> Habilidad:</div>
    <div className='centrar'>{item.habilidad}</div>
    </div>
    </div>
    </div>
    </>

  )
}

export default ItemDetail
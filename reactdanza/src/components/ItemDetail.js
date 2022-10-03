import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { bailarines } from './ItemList'




const ItemDetail = () => {

   const {id : itemId} = useParams ()

   const [item, setItem] = useState()

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
    <div>{item.name}</div>
    <div>{item.edad}</div>
    <div>{item.habilidad}</div>
    </>

  )
}

export default ItemDetail
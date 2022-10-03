import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

const bailarines = [
{id: 1, name:'Sofia fernandez', edad: '23', habilidad: 'flexibilidad'},
{id: 2, name:'Mia Gomez', edad: '28', habilidad: 'acrobacia'},
{id: 3, name:'Antonella Culmen', edad: '18', habilidad: 'pirouettas'},
{id: 4, name:'Rocio Perez', edad: '25', habilidad: 'flexibilidad'},
{id: 5, name:'Jazmin Mutz', edad: '23', habilidad: 'saltos'},
{id: 6, name:'Magali Orlando', edad: '21', habilidad: 'fuerza'},
{id: 7, name:'Josefina Carr', edad: '24', habilidad: 'acrobacia'},
]
export {bailarines}

const ItemList = () => {

const [items, setItems] = useState([])    

useEffect( () => {
   getBailarines().then (res => {
    setItems (res)
   })
   .catch( err => {
    console.log('err:' + err)
   })
  },[])


const getBailarines = () => {
    return new Promise ((resolve) =>{
        setTimeout (() => {
            resolve(bailarines)
        }, 2000)
    })
   }
  

  return (
    <div>
        <h1> BAILARINES </h1>
        {items.map(item => <ItemCard key={item.id} {...item}/>)}
    </div>
  )



}

export default ItemList
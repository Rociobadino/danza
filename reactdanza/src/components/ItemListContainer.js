import React from 'react'

const ItemListContainer = ({greetings}) => {
    const styles = {fontsize: '10rem', width: 'fit-content', margin: '6px'}
  return (
    <>
    <h2>{greetings}</h2>
    </>
  )
}

export default ItemListContainer
import React from 'react'

export default function ItemListContainer({Greeting}) {
    return (
    <div className='greeting' style={{backgroundColor : "#DAFFEE"}}>
        <p>{Greeting}</p>
    </div>
  )
}

import React from 'react'

export default function ItemDetail({producto}) {
  return (
    <div>{
        producto.id ? (
               <>
               {producto.id + " "
               + " " + producto.name
               + " " + producto.category
               + " " + producto.precio
               + " " + producto.description
               + " " + producto.image}
               </>
           ): <>Loading...</>
       }</div>
  )
}
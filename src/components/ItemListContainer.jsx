import React from 'react'
import {
  useState
} from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function ItemListContainer({}) {

  const {categoryId} = useParams();

  const [productos, setProductos] = useState([]);
  let productosHC = [{
      id: 100,
      name: "Iphone X",
      category: "celulares",
      precio: 100
    },
    {
      id: 101,
      name: "Iphone 11",
      category: "celulares",
      precio: 120
    },
    {
      id: 102,
      name: "Iphone 12",
      category: "celulares",
      precio: 113
    },
    {
      id: 103,
      name: "Iphone 13",
      category: "celulares",
      precio: 200
    },
    {
      id: 104,
      name: "Funda Iphone X",
      category: "accesorios",
      precio: 200
    },
  ]

  
  useEffect(() => {
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHC)
      }, 2000)
    });
      
    productosPromise.then((res) => {
      if(categoryId){
        setProductos(res.filter(item=> item.category == categoryId))
      }else{
        setProductos(res);
      }
    })
  }, [categoryId]);  
  
  return (
    <div>
      {!productos.length && "Loading.."}
      {productos.map((item) => (
        <div key={item.id}>
        <>{JSON.stringify(item)}</>
        <br/>
        <br/>
        </div>
      ))}
    </div>
  );
  }

import React from 'react'
import {
  useState
} from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function ItemListContainer({}) {

  const {itemID} = useParams();

  const [producto, setProducto] = useState({});
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
    const productoPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHC.find((item) => producto.id == itemID));
      }, 2000)
    });
      
    productoPromise.then((res) => {
     setProducto(res);
      });
    }, [itemID]);  
  
  return (
    <div>
        {
         producto.id ? (
                <>
                {producto.id + " "
                + " " + producto.name
                + " " + producto.category
                + " " + producto.precio}
                </>
            ): <>Loading...</>
        }
    </div>
  );
  }

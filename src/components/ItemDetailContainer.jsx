import React from 'react'
import {
  useState
} from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {data} from './data';
import ItemDetail from './ItemDetail';

export default function ItemDeatailContainer({}) {

  const {itemID} = useParams();

  const [producto, setProducto] = useState({});
  
  useEffect(() => {
    const productoPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(data.find((item) => producto.id == itemID));
      }, 2000)
    });
      
    productoPromise.then((res) => {
     setProducto(res);
      });
    }, [itemID]);  
  
  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  );
  }

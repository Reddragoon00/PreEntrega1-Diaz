import React from 'react'
import {
  useState
} from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ItemList from './ItemList';
import {data} from './data'

export default function ItemListContainer({}) {

  const {categoryId} = useParams();

  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(data)
      }, 2000)
    });
      
    productosPromise.then((res) => {
      if(categoryId){
        setProductos(res.filter(item=> item.category === categoryId))
      }else{
        setProductos(res);
      }
    })
  }, [categoryId]);  
  
  return (
    <div className='col-md-5'>
      <ItemList productos={productos}/>
    </div>
  );
  }

import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {


  const[goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext()
  const onAdd = (quantity) =>{
   setGoToCart(true);
   addProduct(item, quantity);
  }



  return (
    <div className='border border-2 row mt-5'>
        <div className='col-md-12'>
        <img src={item.img} className='img-fluid mt-3' alt={item.title} />
        <h4>{item.title} </h4>
        <p>{item.categoryId}{item.description}</p>
        <p> $ {item.price} USD </p>
        <p> stock:{item.stock}</p>

      </div>
      
        
      {goToCart ? <Link to='/cart'>finalziar compra!!</Link> :<ItemCount stock={10} initial={1} onAdd={onAdd} />}

    



    </div>
  )
}

export default ItemDetail
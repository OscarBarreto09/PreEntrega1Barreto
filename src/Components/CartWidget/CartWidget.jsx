import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { useCartContext } from '../CartContext/CartContext';


const CartWidget = () => {


  const {totalProducts, cart} = useCartContext();

  return (
    <div>
       <button>
        <GiShoppingCart /> 
        <span className="position-absolute top-5 start-10 translate-middle badge rounded-pill bg-danger">{totalProducts() ||cart}</span> 
        </button>

    </div>
  )
}

export default CartWidget;
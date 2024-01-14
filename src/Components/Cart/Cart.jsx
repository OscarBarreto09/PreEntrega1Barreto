import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
 
  if (cart.length === 0) {
    return (
      <div>
        <p>No hay vehiculos en el carro de compras</p>
        <Link to="/">Hacer compras</Link>
      </div>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total: $ {totalPrice()} USD</p>
   
      <Link to="/checkout">
        {' '}
        <button className="btn-total">Finalizar Compra</button>
      </Link>
    </>
  );
};

export default Cart;
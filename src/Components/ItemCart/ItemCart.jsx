import React from 'react';
import { useCartContext } from '../CartContext/CartContext';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
      <div className="card md-4 itemCart">
        <img className='img-fluid' src={product.img} alt={product.title} />
        <div>
          <p>Vehiculo: {product.categoryId} {product.title}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio unitario del vehiculo: $ {product.price}</p>
          <p>Subtotal: ${product.quantity * product.price}</p>
          <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
      </div>
    );
};

export default ItemCart;
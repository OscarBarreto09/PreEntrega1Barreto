import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  console.log
  return (
    <Link to={'/item/' + item.id} className='text-decoration-none'>
    
    <div className='container mt-15'>

        <div className='card border border-1 p-3 mb-5' style={{ height: '20rem' }}>
            <img src={item.img} className='card-img-top img-fluid' alt={item.title} />
            <div className='card-body text-center mt-3'>
                <h4 children='card-text'>{item.categoryId} {item.title}</h4>
                <p className='card-text'>$ {item.price} USD </p>

            </div>
        </div>
    </div>
   
    </Link>
  )
}

export default Item
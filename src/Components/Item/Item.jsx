import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  console.log
  return (
    <Link to={'/item/' + item.id} className='text-decoration-none'>
    
    <div className='container'>

        <div className='card border border-0'>
            <img src={item.img} className='card-img-top' alt={item.title} />
            <div className='card-body text-center'>
                <h4 children='card-text'>{item.categoryId} {item.title}</h4>
                <p className='card-text'>$ {item.price} USD </p>

            </div>
        </div>
    </div>
   
    </Link>
  )
}

export default Item
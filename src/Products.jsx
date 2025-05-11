import React,{useState,useEffect} from 'react'
import './API.css'

function ProductCard({title,price,image,rating}) {
    
   
  return (
    <>
    <div className='header'>
 
  
    </div>
   
    <div className='card'>
            <img src={image}/>
            <p>{title}</p>
            <p id="price">${price}</p>
            <p>rating:{rating.rate}</p>
            <button type="button" class="btn btn-warning">Buy</button>
           
    </div>
    </>
  )
}

export default ProductCard

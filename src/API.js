import React, { useState, useEffect } from 'react';
import Products from './Products';
import './API.css'
function API() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
    // getProducts()
  },[])
  
  // async function getProducts(){
  //   let res=await fetch('https://fakestoreapi.com/products');
  //   let productlist=await res.json()
  //   setProducts(productlist)
  //   console.log(productlist)

  
  return (
    <>
    <div className='product-list'> 
       {products.map((p)=><Products {...p} key={p.id}/>)}
    </div>
   
    
    </>
  );
}

export default API;

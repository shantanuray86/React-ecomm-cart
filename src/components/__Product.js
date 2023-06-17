import React, {useState, useEffect} from 'react'
import {add} from '../store/cartSlice';
import { useDispatch } from 'react-redux';
const Product = () => {
  const dispatch = useDispatch();
  const [products,setProducts] = useState([]);
  useEffect(()=>{
      const fetchProducts = async()=>{
          const res = await fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=>setProducts(json))
          //.then(json=>console.log(json))
      }
      fetchProducts();
  },[]);

  const handleAdd=(product)=>{
    dispatch(add(product));
  }
  return (
    <div className='productsWrapper'>
        {
            products.map(product=>(
                <div className='card' key={product.id}>
                    <img src={product.image} alt='heheh' />
                    <h4>{product.title}</h4>
                    <h4>{product.price}</h4>
                    <button className='btn' onClick={()=>handleAdd(product)}>Add to Cart</button>
                </div>
            ))
        }
     </div>
  )
}

export default Product
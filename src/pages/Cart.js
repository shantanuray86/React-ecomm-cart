import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {remove} from '../store/cartSlice';

const Cart = () => {
  const products = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const handleRemove=(product)=>{
    dispatch(remove(product));
  }
  return (
    <div>
      <h4>Cart</h4><br />
      <div className="cartWrapper">
        {
          products.map(product=>(
         
              <div className='cartCard' key={product.id}>
                    <img src={product.image} alt='heheh' />
                    <h4>{product.title}</h4>
                    <h4>{product.price}</h4>
                    <h4>{product?.cartQuantity}</h4>
                    <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button>
              </div>

          ))
        }
      </div>
    </div>
    
  )
}

export default Cart
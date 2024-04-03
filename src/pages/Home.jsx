import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {add} from '../redux/cartSlice'
import { STATUSES, fetchProduct } from '../redux/apicallProduct'

const Home = () => {
    const dispatch = useDispatch()
    const {data:product,status} = useSelector((state) => state.product)

    useEffect(()=>{
        dispatch(fetchProduct())
    },[])

    const handleAdd = (productItem) => {
      dispatch(add(productItem))
    }

    if(status === STATUSES.LOADING){
      return <h2 style={{fontWeight:"bolder",justifyContent:"center",display:"flex"}}>Loading...</h2>
    }
  
  return (
    <div className='productsWrapper'>
      {
        product.map((productItem)=>(
            <div className='card' key={productItem.id}>
              <img src={productItem.image} alt='img'/>
              <h4>{productItem.title}</h4>
              <h4>{productItem.price}</h4>
              <button className='btn' onClick={() => handleAdd(productItem)}>Add to Cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default Home

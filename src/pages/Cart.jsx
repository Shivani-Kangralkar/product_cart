import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {remove} from '../redux/cartSlice'

const Cart = () => {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  console.log("cartItem", cartItem);

  const handleRemove = (itemID) => {
    console.log("removed", itemID);
    dispatch(remove(itemID))
  }
  return (
    <div>
      <h3 className="three">Cart Page</h3>
      <div className="cartWrapper">
        {cartItem.map((data) => (
          <div className="cartCard" key={data.id}>
            <img src={data.image} alt="image" />
            <h5>{data.title}</h5>
            <h5>{data.price}</h5>
            <button className="btn" onClick={() => handleRemove(data.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

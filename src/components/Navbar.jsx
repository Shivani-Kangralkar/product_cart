import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = () => {
    const items = useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between" , margin:"20px"}}>
        <span>Redux Tutorial</span>
        <div>
            <Link className='navLink' style={{fontWeight:"bolder",marginRight:"20px"}}  to={"/"}>Home</Link>
            <Link   className='navLink' style={{marginRight:"24px",fontWeight:"bolder"}} to={"/cart"}>Cart</Link>
            <span style={{fontWeight:"bolder"}}>items:{items.length}</span>
        </div>
    </div>
  )
}

export default Navbar

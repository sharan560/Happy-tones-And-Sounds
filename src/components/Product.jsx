import React from 'react'
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';
import './Product.css'




const Product = () => {
  return (
    <div id='ph1'><h1>Our Products</h1>
    <div id='product'>
        <div className="product"><img src={f1} alt="" />
                <h3>Common objects</h3> 
                <button id='bt1'>Buy now</button>
        </div>
        <div className="product"><img src={f2} alt="" />
        <h3>Fruits</h3> 
                <button id='bt1'>Buy now</button></div>
        <div className="product"><img src={f3} alt="" />
        <h3>Vegetables</h3> 
                <button id='bt1'>Buy now</button></div>
        <div className="product"><img src={f4} alt="" />\
        <h3>Animals</h3> 
                <button id='bt1'>Buy now</button></div>

    
    </div> 
    </div>
  )
}

export default Product
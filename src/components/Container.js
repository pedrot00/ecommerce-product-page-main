import React from "react";
    import './Container.css'
    import minus from '../images/icon-minus.svg'

function Container(){
return(
    <>
    <div className="container">
        <div className="companyTitle">
            <p>SNEAKER COMPANY</p>
        </div>
        <div className="productTitle">
            <h1>Fall Limited Edition Sneakers</h1>
        </div>
        <div className="productDescription">
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        </div>
        <div className="productPrice">
            <h2>$125.00</h2>
        </div>
        <div className="productDiscount">
            <p>50%</p>
        </div>
        <div className="productPreviwsPrice">
            <p>$250.00</p>
        </div>
        <div className="buyButton">Add to cart</div>
    </div>
    </>
)
}

export default Container;
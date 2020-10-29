import React from 'react'
import "./Product.css"
import { UseStateValue } from './StateProvider';

function Product({ id, price, title, rating, image }) {

    const [{ basket }, dispatch] = UseStateValue();
   

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                rating,
                price
            }
        });
    }

    return (
        <div className="product">
            <p>{title}</p>
            <div className="product_price">
                <small>$</small>
                <strong> {price}</strong>
            </div>
            <div className="product_rating">
                {Array(rating).fill().map((_, index) => {
                    return <p key={index}>*</p>;
                })}
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product

import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket =() => {
        dispatch ({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkouProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>            
        </div>
    )
}

export default CheckoutProduct

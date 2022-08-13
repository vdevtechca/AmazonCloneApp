import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div classname="checkout">
            <div classname="checkout_left">
            <img className="checkout__ad" src="" alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no item in your baket. To buy one or "Add to Basket" next to the itm</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/* List out all items in checkout products */}
                    {basket?.map((item) => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                         />
                    ))}
                </div>
            )}
            </div>
                {basket.length > 0 && (
                    <div className="checkout__right">
                        {/* <h1>Subtotal</h1> */}
                        <Subtotal />
                    </div>
                 )}
            </div>
    );
}

export default Checkout;
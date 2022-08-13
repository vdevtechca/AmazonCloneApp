import React from 'react';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import './Subtotal.css';



// import CurrencyFormat from "react-currency-format";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    
    return (
        <div className="subtotal">
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

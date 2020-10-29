import React from 'react'
import { UseStateValue } from './StateProvider'
import "./Checkout.css";

function Checkout() {
    const [{ basket }] = UseStateValue();

    return (
        <div className="checkout">
            <img
                className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping basket is empty.</h2>
                </div>
            ) : (
                    <div>
                        <h2 className="checkout_title">
                            Your Shopping Basket
                        </h2>
                        {basket.map((item => {
                            return <CheckoutProduct

                            />
                        }))}
                    </div>
                )}
        </div>
    )
}

export default Checkout

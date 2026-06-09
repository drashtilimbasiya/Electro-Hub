// ===========================
// FULL BuyNow.js
// CREATE NEW FILE
// ===========================

import Navbar from "./Navbar";

import {
    useLocation
} from "react-router-dom";

function BuyNow() {

    const location = useLocation();

    const product = location.state;

    if(!product){

        return <h1 style={{color:"white"}}>

            No Product Found

        </h1>;
    }

    // ================= DISCOUNT =================

    const discount = 5;

    const discountPrice =

        (product.price * discount) / 100;

    const finalPrice =

        product.price - discountPrice;

    return (

        <div>

            <Navbar />

            <div className="buy-container">

                {/* LEFT */}

                <div className="buy-left">

                    <img
                        src={product.image}
                        alt="product"
                    />

                </div>

                {/* RIGHT */}

                <div className="buy-right">

                    <h1>
                        {product.pname}
                    </h1>

                    <h3>
                        {product.company}
                    </h3>

                    <h2>

                        Original Price :
                        ₹ {product.price}

                    </h2>

                    <h3
                    style={{
                        color:"orange"
                    }}
                    >

                        Discount :
                        {discount}% OFF

                    </h3>

                    <h2
                    style={{
                        color:"cyan"
                    }}
                    >

                        Final Price :
                        ₹ {finalPrice}

                    </h2>

                    <p>

                        {product.description}

                    </p>

                    {/* ADDRESS */}

                    <input
                        type="text"
                        placeholder="Enter Address"
                    />

                    {/* PHONE */}

                    <input
                        type="text"
                        placeholder="Enter Mobile Number"
                    />

                    {/* PAYMENT */}

                    <select>

                        <option>
                            Cash On Delivery
                        </option>

                        <option>
                            UPI
                        </option>

                        <option>
                            Credit Card
                        </option>

                    </select>

                    {/* ORDER BUTTON */}

                    <button
                        className="order-btn"

                        onClick={() =>
                            alert(
                                "Order Placed Successfully"
                            )
                        }
                    >

                        Place Order

                    </button>

                </div>

            </div>

        </div>
    );
}

export default BuyNow;
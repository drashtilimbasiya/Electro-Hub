// ===========================
// FULL Cart.js
// ===========================

import Navbar from "./Navbar";

import {
    useEffect,
    useState
} from "react";

function Cart() {

    const [cartItems, setCartItems] = useState([]);

    // ================= GET CART DATA =================

    useEffect(() => {

        const data =

        JSON.parse(
            localStorage.getItem("cart")
        )

        || [];

        setCartItems(data);

    }, []);

    // ================= REMOVE ITEM =================

    const removeItem = (index) => {

        let updatedCart = [...cartItems];

        updatedCart.splice(index, 1);

        setCartItems(updatedCart);

        localStorage.setItem(

            "cart",

            JSON.stringify(updatedCart)
        );
    };

    // ================= TOTAL PRICE =================

    const totalPrice =

    cartItems.reduce((total, item) => {

        return total + Number(item.price);

    }, 0);

    return (

        <div>

            <Navbar />

            <div className="page-container">

                <h1>

                    My Cart

                </h1>

                {
                    cartItems.length > 0 ?

                    <div className="product-container">

                        {
                            cartItems.map((item, index) => (

                                <div
                                    className="card"

                                    key={index}
                                >

                                    <img
                                        src={item.image}
                                        alt="product"
                                    />

                                    <h3>
                                        {item.pname}
                                    </h3>

                                    <h4>
                                        {item.company}
                                    </h4>

                                    <h2>
                                        ₹ {item.price}
                                    </h2>

                                    <button

                                        className="delete-btn"

                                        onClick={() =>
                                            removeItem(index)
                                        }
                                    >

                                        Remove

                                    </button>

                                </div>

                            ))
                        }

                        {/* TOTAL */}

                        <div
                        style={{
                            width:"100%",
                            marginTop:"40px"
                        }}
                        >

                            <h1
                            style={{
                                color:"cyan"
                            }}
                            >

                                Total Price :
                                ₹ {totalPrice}

                            </h1>

                        </div>

                    </div>

                    :

                    <h1
                    style={{
                        color:"white",
                        marginTop:"50px"
                    }}
                    >

                        Cart Is Empty

                    </h1>
                }

            </div>

        </div>
    );
}

export default Cart;
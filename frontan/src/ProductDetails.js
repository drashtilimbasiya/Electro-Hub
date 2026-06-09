// ===========================
// FULL ProductDetails.js
// ===========================

import Navbar from "./Navbar";

import axios from "axios";

import {
    useParams,
    useNavigate
} from "react-router-dom";

import {
    useEffect,
    useState
} from "react";

function ProductDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    // ================= GET PRODUCT =================

    const getProduct = async () => {

        try {

            const result = await axios.get(

                `http://localhost:5000/product/${id}`

            );

            setProduct(result.data);

        } catch (error) {

            console.log(error);
        }
    };

   useEffect(() => {

    getProduct();

}, [getProduct]);

    
    // ================= ADD TO CART =================

    const addToCart = () => {

        let cart =
        JSON.parse(localStorage.getItem("cart"))
        || [];

        cart.push(product);

        localStorage.setItem(

            "cart",

            JSON.stringify(cart)
        );

        alert("Product Added To Cart");
    };

    // ================= BUY NOW =================

    const buyNow = () => {

        navigate(

            "/buy",

            {
                state: product
            }
        );
    };

    // ================= LOADING =================

    if(!product){

        return (

            <h1 style={{color:"white"}}>

                Loading...

            </h1>
        );
    }

    // ================= DISCOUNT =================

    const discountPercent = 5;

    const discountPrice =

        (product.price * discountPercent) / 100;

    const finalPrice =

        product.price - discountPrice;

    return (

        <div>

            <Navbar />

            <div className="details-container">

                {/* LEFT */}

                <div className="details-left">

                    <img
                        src={product.image}
                        alt="product"
                    />

                </div>

                {/* RIGHT */}

                <div className="details-right">

                    {/* PRODUCT NAME */}

                    <h1>
                        {product.pname}
                    </h1>

                    {/* COMPANY */}

                    <h3>
                        {product.company}
                    </h3>

                    {/* ORIGINAL PRICE */}

                    <h2>

                        Original Price :
                        ₹ {product.price}

                    </h2>

                    {/* DISCOUNT */}

                    <h3
                    style={{
                        color:"orange",
                        marginTop:"10px"
                    }}
                    >

                        Discount :
                        {discountPercent}% OFF

                    </h3>

                    {/* DISCOUNT PRICE */}

                    <h3
                    style={{
                        color:"red",
                        marginTop:"10px"
                    }}
                    >

                        Discount Amount :
                        ₹ {discountPrice}

                    </h3>

                    {/* FINAL PRICE */}

                    <h1
                    style={{
                        color:"cyan",
                        marginTop:"20px"
                    }}
                    >

                        Final Price :
                        ₹ {finalPrice}

                    </h1>

                    {/* DESCRIPTION */}

                    <p
                    style={{
                        marginTop:"20px"
                    }}
                    >

                        {product.description}

                    </p>

                    {/* PRODUCT DETAILS */}

                    <div
                    style={{
                        marginTop:"30px"
                    }}
                    >

                        <h2>

                            Product Details

                        </h2>

                        <ul
                        style={{
                            marginTop:"15px"
                        }}
                        >

                            <li>
                                Latest Technology
                            </li>

                            <li>
                                Best Quality Product
                            </li>

                            <li>
                                1 Year Warranty
                            </li>

                            <li>
                                Fast Delivery
                            </li>

                            <li>
                                Cash On Delivery Available
                            </li>

                        </ul>

                    </div>

                    {/* OFFERS */}

                    <div
                    style={{
                        marginTop:"30px"
                    }}
                    >

                        <h2>

                            Available Offers

                        </h2>

                        <ul
                        style={{
                            marginTop:"15px"
                        }}
                        >

                            <li>
                                5% Instant Discount
                            </li>

                            <li>
                                Free Delivery
                            </li>

                            <li>
                                EMI Available
                            </li>

                            <li>
                                Extra Cashback On UPI
                            </li>

                        </ul>

                    </div>

                    {/* BUTTONS */}

                    <div className="details-btns">

                        <button
                            className="cart-btn"

                            onClick={addToCart}
                        >

                            Add To Cart

                        </button>

                        <button
                            className="buy-btn"

                            onClick={buyNow}
                        >

                            Buy Now

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProductDetails;

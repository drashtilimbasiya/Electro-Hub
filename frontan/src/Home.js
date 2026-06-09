import Navbar from "./Navbar";

import {
    useEffect,
    useState
} from "react";

import axios from "axios";

import {
    useNavigate,
    useLocation
} from "react-router-dom";

function Home() {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const location = useLocation();

    // ================= SEARCH QUERY =================

    const query =
    new URLSearchParams(location.search);

    const search =
    query.get("search") || "";

    // ================= GET PRODUCTS =================

    const getProducts = async () => {

        try {

            const result = await axios.get(
                "http://localhost:5000/products"
            );

            setProducts(result.data);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        getProducts();

    }, []);

    // ================= FILTER PRODUCTS =================

    const filteredProducts =
    products.filter((item) => {

        return (

            item.pname
            ?.toLowerCase()
            .includes(search.toLowerCase())

            ||

            item.company
            ?.toLowerCase()
            .includes(search.toLowerCase())

            ||

            item.category
            ?.toLowerCase()
            .includes(search.toLowerCase())

        );
    });

    return (

        <div>

            <Navbar />

            {/* HERO */}

            <div className="container">

                <h1>
                    Welcome To Electro Hub
                </h1>

                <p>
                    Buy Latest Electronic Devices
                </p>

            </div>

            {/* PRODUCTS */}

            <div className="product-container">

                {
                    filteredProducts.length > 0 ?

                    filteredProducts.map((item) => (

                        <div
                            className="card"

                            key={item._id}

                            onClick={() =>
                                navigate(`/product/${item._id}`)
                            }
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

                        </div>

                    ))

                    :

                    <h1
                    style={{
                        color:"white",
                        marginTop:"50px"
                    }}
                    >
                        No Products Found
                    </h1>
                }

            </div>

        </div>
    );
}

export default Home;
import Navbar from "./Navbar";

import axios from "axios";

import {
    useEffect,
    useState,
    useCallback
} from "react";

import {
    useParams,
    useNavigate
} from "react-router-dom";

function CategoryProducts() {

    const { name } = useParams();

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    // ================= GET PRODUCTS =================

   const getProducts = useCallback(async () => {

    try {

        const result = await axios.get(
            "http://localhost:5000/products"
        );

        setProducts(result.data);

    } catch (error) {

        console.log(error);
    }

}, []);
            // ================= FILTER =================

            const filteredProducts =
            result.data.filter((item) => {

                if(!item.category){

                    return false;
                }

                // DATABASE CATEGORY

                let dbCategory =
                item.category
                .toLowerCase()
                .trim();

                // URL CATEGORY

                let urlCategory =
                name
                .toLowerCase()
                .trim();

                // REMOVE s

                if(dbCategory.endsWith("s")){

                    dbCategory =
                    dbCategory.slice(0, -1);
                }

                if(urlCategory.endsWith("s")){

                    urlCategory =
                    urlCategory.slice(0, -1);
                }

                return dbCategory === urlCategory;
            });

            setProducts(filteredProducts);

        } catch (error) {

            console.log(error);
        }
    };

   useEffect(() => {

    getProducts();

}, [getProducts]);

    return (

        <div>

            <Navbar />

            <div className="page-container">

                <h1>

                    {name.toUpperCase()} Products

                </h1>

                <div className="product-container">

                    {
                        products.length > 0 ?

                        products.map((item) => (

                            <div
                                className="card"

                                key={item._id}

                                onClick={() =>
                                    navigate(
                                        `/product/${item._id}`
                                    )
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

        </div>
    );
}

export default CategoryProducts;

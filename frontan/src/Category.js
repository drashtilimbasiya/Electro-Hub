import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";

function Category() {

    const navigate = useNavigate();

    const categories = [

        "mobile",
        "laptop",
        "headphones",
        "camera",
        "tv",
        "tablet",
        "bluetooth",
        "smartwatch"

    ];

    return (

        <div>

            <Navbar />

            <div className="page-container">

                <h1>
                    Categories
                </h1>

                <div className="category-container">

                    {
                        categories.map((item, index) => (

                            <div
                                className="category-card"

                                key={index}

                                onClick={() =>
                                    navigate(`/category/${item}`)
                                }
                            >

                                {item.toUpperCase()}

                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default Category;
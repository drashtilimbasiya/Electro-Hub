import { useEffect, useState } from "react";

import axios from "axios";

function Admin() {

    // ================= STATES =================

    const [pname, setPname] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [discount, setDiscount] = useState("");
    const [offers, setOffers] = useState("");
    const [details, setDetails] = useState("");

    const [products, setProducts] = useState([]);

    // EDIT MODE
    const [editId, setEditId] = useState(null);

    // ================= GET PRODUCTS =================

    const getProducts = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/products"
            );

            setProducts(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        getProducts();

    }, []);

    // ================= ADD PRODUCT =================

    const addProduct = async () => {

        if (
            !pname ||
            !price ||
            !company ||
            !category ||
            !image ||
            !description
        ) {
            alert("Fill all fields");
            return;
        }

        try {

            await axios.post(
                "http://localhost:5000/addproduct",
                {
                    pname,
                    company,
                    category,
                    price,
                    image,
                    description
                }
            );

            alert("Product Added");

            clearForm();

            getProducts();

        } catch (error) {

            console.log(error);
        }
    };

    // ================= DELETE PRODUCT =================

    const deleteProduct = async (id) => {

        try {

            await axios.delete(
                `http://localhost:5000/deleteproduct/${id}`
            );

            alert("Product Deleted");

            getProducts();

        } catch (error) {

            console.log(error);
        }
    };

    // ================= EDIT PRODUCT =================

    const editProduct = (product) => {

        setEditId(product._id);

        setPname(product.pname);
        setCompany(product.company);
        setCategory(product.category);
        setPrice(product.price);
        setImage(product.image);
        setDescription(product.description);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // ================= UPDATE PRODUCT =================

    const updateProduct = async () => {

        try {

            await axios.put(

                `http://localhost:5000/updateproduct/${editId}`,

                {
                    pname,
                    company,
                    category,
                    price,
                    image,
                    description
                }
            );

            alert("Product Updated");

            clearForm();

            setEditId(null);

            getProducts();

        } catch (error) {

            console.log(error);
        }
    };

    // ================= CLEAR FORM =================

    const clearForm = () => {

        setPname("");
        setCompany("");
        setCategory("");
        setPrice("");
        setImage("");
        setDescription("");
    };

    // ================= RETURN =================

    return (

        <div className="admin-container">

            <h1>
                Admin Panel
            </h1>

            {/* FORM */}

            <div className="form-box">

                <input
                    type="text"
                    placeholder="Product Name"
                    value={pname}
                    onChange={(e) =>
                        setPname(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Company Name"
                    value={company}
                    onChange={(e) =>
                        setCompany(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) =>
                        setCategory(e.target.value)
                    }
                />


                    {/* ===========================
                        FULL Admin.js CATEGORY INPUT
                =========================== */}

               <input
                    type="text"

                    placeholder="Category"

                    value={category}

                    onChange={(e) =>

                    setCategory(

                         e.target.value
                        .toLowerCase()
                        .trim()

                        )
                    }
                />


                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) =>
                        setPrice(e.target.value)
                    }
                />


                <input
                    type="number"
                    placeholder="Discount %"
                    value={discount}
                    onChange={(e) =>
                        setDiscount(e.target.value)
                    }
                />

                <textarea
                    placeholder="Offers separated by comma"
                    value={offers}
                    onChange={(e) =>
                        setOffers(e.target.value)
                    }
                />

                <textarea
                    placeholder="Details separated by comma"
                    value={details}
                    onChange={(e) =>
                        setDetails(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) =>
                        setImage(e.target.value)
                    }
                />

                <textarea
                    className="description-box"
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                ></textarea>

                {
                    editId ? (

                        <button
                            onClick={updateProduct}
                            className="edit-btn"
                        >
                            Update Product
                        </button>

                    ) : (

                        <button onClick={addProduct}>
                            Add Product
                        </button>

                    )
                }

            </div>

            {/* PRODUCTS */}

            <div className="product-container">

                {
                    products.map((p) => (

                        <div
                            className="card"
                            key={p._id}
                        >

                            <img
                                src={p.image}
                                alt={p.pname}
                            />

                            <h3>
                                {p.pname}
                            </h3>

                            <h4>
                                {p.company}
                            </h4>

                            <p className="description">
                                {p.description}
                            </p>

                            <h2>
                                ₹ {p.price}
                            </h2>

                            <div className="btn-group">

                                {/* BUY BUTTON */}

                                <button
                                    className="buy-btn"
                                >
                                    Buy Now
                                </button>

                                {/* EDIT BUTTON */}

                                <button
                                    className="edit-btn"

                                    onClick={() =>
                                        editProduct(p)
                                    }
                                >
                                    Edit
                                </button>

                                {/* DELETE BUTTON */}

                                <button
                                    className="delete-btn"

                                    onClick={() =>
                                        deleteProduct(p._id)
                                    }
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    );
}

export default Admin;

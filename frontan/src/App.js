import './App.css';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Admin from "./Admin";
import About from "./About";
import Category from "./Category";
import Contact from "./Contact";
import CategoryProducts from "./CategoryProducts";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import BuyNow from "./BuyNow";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

                <Route
                    path="/admin"
                    element={<Admin />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/category"
                    element={<Category />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/category/:name"
                    element={<CategoryProducts />}
                />

                {/* PRODUCT DETAILS */}

                <Route
                    path="/product/:id"
                    element={<ProductDetails />}
                />

                <Route
                    path="/cart"
                    element={<Cart />}
                />


                <Route
                    path="/buy"
                    element={<BuyNow />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default App;
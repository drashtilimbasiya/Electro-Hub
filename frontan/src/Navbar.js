// ===========================
// FULL Navbar.js
// ===========================

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

function Navbar() {

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    // ================= SEARCH =================

    const handleSearch = (e) => {

        // ENTER PRESS

        if(e.key === "Enter"){

            navigate(`/?search=${search}`);
        }
    };

    return (

        <div className="navbar">

            {/* LOGO */}

            <h2
                style={{cursor:"pointer"}}

                onClick={() => navigate("/")}
            >
                Electro Hub
            </h2>

            {/* SEARCH BAR */}

            <div className="search-box">

                <input
                    type="text"

                    placeholder="Search Products..."

                    value={search}

                    onChange={(e) =>
                        setSearch(e.target.value)
                    }

                    onKeyDown={handleSearch}
                />

            </div>

            {/* NAV LINKS */}

            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/about">About</Link>

                <Link to="/category">Category</Link>

                <Link to="/contact">Contact</Link>

                <Link to="/cart">Cart</Link>

                <Link to="/login">Login</Link>

                <Link to="/signup">Signup</Link>

            </div>

        </div>
    );
}

export default Navbar;
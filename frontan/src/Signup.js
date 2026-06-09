import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {

        if (!name || !email || !password) {
            alert("Please Fill All Fields");
            return;
        }

         const result = await axios.post("http://localhost:5000/signup", {
            name,
            email,
            password
        });

        alert(result.data.message);
    };

    return (
        <div>

            <Navbar />
             <div className="form-box">

                <h2>Signup</h2>

                <input
                    type="text"
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleSignup}>Signup</button>

            </div>

        </div>
    );
}

export default Signup;
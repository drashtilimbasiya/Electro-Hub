import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {

        if (!email || !password) {
            alert("Please Fill All Fields");
            return;
        }

        try {

            const res = await axios.post(
                "http://localhost:5000/login",
                { email, password }
            );

            alert(res.data.message);

            // 👉 DIRECT OPEN ADMIN (NO CONDITION)
            navigate("/admin");

        } catch (error) {
            console.log(error);
            alert("Login Failed");
        }
    };

    return (
        <div>

            <Navbar />

            <div className="form-box">

                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin}>
                    Login
                </button>

            </div>

        </div>
    );
}

export default Login;
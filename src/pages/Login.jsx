
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login Successful!");
            navigate("/dashboard");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Login Page</h2>

            <form onSubmit={handleLogin} autoComplete="off">
                <input
                    type="email"
                    name="login-email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    required
                />

                <br /><br />

                <input
                    type="password"
                    name="login-password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                />

                <br /><br />

                <button type="submit">Login</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    );
}

export default Login;

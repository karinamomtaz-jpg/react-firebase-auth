
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Registration Successful!");
            navigate("/dashboard");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Register Page</h2>

            <form onSubmit={handleRegister} autoComplete="off">
                <input
                    type="email"
                    name="register-email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    required
                />

                <br /><br />

                <input
                    type="password"
                    name="register-password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                />

                <br /><br />

                <button type="submit">Register</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
}

export default Register;


import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <div>
            <h1>Profile Page</h1>
            <p>User Email: {user?.email}</p>

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Profile;

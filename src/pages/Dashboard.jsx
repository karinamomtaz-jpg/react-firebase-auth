
import { useAuth } from "../context/AuthContext";

function Dashboard() {
    const { user } = useAuth();

    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            <p>Logged-in User: {user?.email}</p>
        </div>
    );
}

export default Dashboard;

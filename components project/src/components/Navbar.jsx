import { Link } from "react-router-dom";
import { useAuth } from " ../context /AuthContext";
export default function Navbar() {
    const { user, logout } = useAuth();
    return (
        <nav style={{ padding: "10px", background: "#eee", marginBottom: "20px" }}>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link> {user ? (
                <>
                    <span> Welcome, {user.name}! </span>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
}
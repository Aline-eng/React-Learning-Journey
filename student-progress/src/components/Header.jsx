import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    // Helper function to determine if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <h1>🎓 Student Progress Tracker</h1>
                    <p>Monitor academic performance and course progress</p>
                </div>
                <nav className="nav-links">
                    <Link to="/" className={isActive("/") ? "active" : ""}>
                        📊 Dashboard
                    </Link>
                    <Link to="/add" className={isActive("/add") ? "active" : ""}>
                        ➕ Add Student
                    </Link>
                    <Link to="/students" className={isActive("/students") ? "active" : ""}>
                        👥 All Students
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header
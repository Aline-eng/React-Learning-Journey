import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1>Personal Expense Tracker</h1>
            <p>Track your expenses — simple and local</p>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/add">Add Expense</Link>
                <Link to="/list">View Expenses</Link>
                <Link to="/total">Total</Link>

            </nav>
        </header>
    );
}
export default Header
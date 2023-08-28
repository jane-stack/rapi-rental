import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <div>Rapi Rentals</div>
        <Link to="/">Rentals</Link>
        <Link to="/login">Login</Link>
        </>
    )
}

export default Navbar;
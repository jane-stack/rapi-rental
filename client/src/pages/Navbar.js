import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
    const { user, logoutUser, loggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    const signoutUser = () => {
        fetch(`/logout`, { method: "DELETE" })
        .then(logoutUser)
        .then(() => navigate('/'))
    }

    return (
        <>
        <div>Rapi Rentals</div>
        <Link to="/">Rentals</Link>
        <Link to="/login">Login</Link>
        <Link to="#" onClick={signoutUser}>Logout</Link>
        </>
    )
}

export default Navbar;
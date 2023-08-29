import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
    const { logoutUser, loggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    const signoutUser = () => {
        fetch(`/logout`, { method: "DELETE" })
        .then(logoutUser)
        .then(() => navigate('/'))
    }

    const isSignedIn = () => {
        return (
            <>
            <Link to="#" onClick={signoutUser}>Logout</Link>
            </>
        )
    }

    const isSignedOut = () => {
        return (
            <>
            <Link to="/login">Login</Link>
            </>
        )
    }

    return (
        <>
        <div>Rapi Rentals</div>
        <Link to="/">Rentals</Link>
        {loggedIn ? isSignedIn() : isSignedOut()}
        </>
    )
}

export default Navbar;
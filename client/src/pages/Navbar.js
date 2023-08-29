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

    const isSignedIn = () => {
        return (
            <>
            <Link to="#" onClick={signoutUser}>Logout</Link>
            <h3>Signed in as, {user.first_name} {user.last_name}</h3>
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
        <div>
            <div>Rapi Rentals</div>
            <Link to="/">Rentals</Link>
            {loggedIn ? isSignedIn() : isSignedOut()}
        </div>
    )
}

export default Navbar;
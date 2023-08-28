import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ErrorContext } from "../context/ErrorContext";
import Errors from "../errors/Errors";

function LoginForm() {
    const { loginUser, loggedIn } = useContext(UserContext);
    const { setErrors } = useContext(ErrorContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (loggedIn) {
            navigate("/")
        } else {
            return (
                setErrors([])
            )
        }
    }, [loggedIn, navigate, setErrors])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors);
                setPassword("");
            } else {
                loginUser(data);
                navigate('/')
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                Email &nbsp;
                <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                Password &nbsp;
                <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
            <Errors />
        </form>
    )
}

export default LoginForm;
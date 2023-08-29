import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ErrorContext } from "../context/ErrorContext";
import { useNavigate } from "react-router-dom";
import Errors from "../errors/Errors";

function SignupForm() {
    const { addUser, loginUser, loggedIn } = useContext(UserContext);
    const { setErrors } = useContext(ErrorContext);
    const navigate = useNavigate();
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
        fetch('/signup', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                lastName: lastName, 
                firstName: firstName, 
                email: email, 
                password: password, 
                passwordConfirmation: passwordConfirmation 
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors);
            } else {
                addUser(data);
                loginUser(data);
                navigate('/');
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                Last Name &nbsp;
                <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div>
                First Name &nbsp;
                <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                Email &nbsp;
                <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                Password &nbsp;
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                Confirm Password &nbsp;
                <input type="password" name="passwordConfirmation" id="passwordConfirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
            </div>
            <button type="submit">Sign Up</button>
            <Errors />
        </form>
    )
}

export default SignupForm;
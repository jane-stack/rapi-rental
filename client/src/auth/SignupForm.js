import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ErrorContext } from "../context/ErrorContext";
import { useNavigate } from "react-router-dom";
import Errors from "../errors/Errors";

function SignupForm() {
    const { addUser, loginUser } = useContext(UserContext);
    const { setErrors } = useContext(ErrorContext);
    const initialState = {
        last_name: "",
        first_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    }
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/signup', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
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
                <input 
                type="text" 
                name="last_name"
                value={formData.last_name} 
                onChange={handleChange}/>
            </div>
            <div>
                First Name &nbsp;
                <input 
                type="text"
                name="first_name"
                value={formData.first_name} 
                onChange={handleChange}/>
            </div>
            <div>
                Email &nbsp;
                <input 
                type="text" 
                name="email"
                value={formData.email} 
                onChange={handleChange}/>
            </div>
            <div>
                Password &nbsp;
                <input 
                type="password"
                name="password"
                value={formData.password} 
                onChange={handleChange}/>
            </div>
            <div>
                Confirm Password &nbsp;
                <input 
                type="password" 
                name="password_confirmation"
                value={formData.password_confirmation} 
                onChange={handleChange}/>
            </div>
            <button type="submit">Sign Up</button>
            <Errors />
        </form>
    )
}

export default SignupForm;
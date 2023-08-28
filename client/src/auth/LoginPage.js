import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginPage() {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            {showLogin ? (
                <>
                <LoginForm />
                <p>Create a Rapi Rental Account &nbsp;
                    <button onClick={() => setShowLogin(false)}>Signup</button>
                </p>
                </>
            ):(
                <>
                <SignupForm />
                <p>Log into your Rapi Rental Account &nbsp;
                    <button onClick={() => setShowLogin(true)}>Login</button>
                </p>
                </>
            )}
        </div>
    )
}

export default LoginPage;
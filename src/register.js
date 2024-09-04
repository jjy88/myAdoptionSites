import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        const errors = [];

        // Validation criteria
        const usernameRegex = /^[A-Za-z0-9]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

        // Validate username
        if (!username.match(usernameRegex)) {
            errors.push("Username can only contain letters and digits.");
        }

        // Validate password
        if (!password.match(passwordRegex)) {
            errors.push("Password must be at least 4 characters long and contain at least one letter and one digit.");
        }

        // Show error messages or submit the form
        if (errors.length > 0) {
            setErrorMessages(errors);
        } else {
            setErrorMessages([]);

            // Implement the submission logic here
            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Handle successful registration, e.g., redirect to a login page
                    alert("Registration successful! You can now log in.");
                    window.location.href = '/login';
                } else {
                    // Handle errors from the server, e.g., username already taken
                    setErrorMessages([data.message]);
                }
            })
            .catch(error => {
                console.error('Error during registration:', error);
                setErrorMessages(["An error occurred during registration. Please try again."]);
            });
        }
    };

    return (
        <div>
            <Navbar />
            <main>
                <h1>Create an Account</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Register</button>
                </form>

                {errorMessages.length > 0 && (
                    <div className="error">
                        {errorMessages.map((msg, index) => (
                            <p key={index}>{msg}</p>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}

export default Register;
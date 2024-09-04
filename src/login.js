import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';

const LoginPage = () => {
return (
<div>
    <Header />
    <Navbar />
    <main>
        <h1>Login</h1>
        <form id="loginForm" action="/login" method="POST">
            <input type="text" name="username" id="username" placeholder="Username" required />
            <input type="password" name="password" id="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>

        <p>Don't have an account? <a href="/register">Create one here</a>.</p>

        <div id="errorMessages" className="error"></div>
    </main>
    <Footer />
</div>
);
};

export default LoginPage;
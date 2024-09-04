import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';

const LogoutPage = () => {
    const handleLogout = async () => {
        try {
            const response = await fetch('/logout', {
                method: 'GET',
            });

            if (response.ok) {
                window.location.href = '/login';
            } else {
                alert('Logout failed!');
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <h2>Are you sure you want to logout?</h2>
                <button onClick={handleLogout}>Logout</button>
            </main>
            <Footer />
        </div>
    );
};

export default LogoutPage;
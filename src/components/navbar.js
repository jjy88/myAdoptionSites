import React from 'react';

function Navbar() {
  const navStyles = {
    nav: {
      backgroundColor: '#333',
      color: '#fff',
      paddingTop: '20px',
    },
    ul: {
      listStyleType: 'none',
      padding: '20px 0',
    },
    li: {
      display: 'block',
      padding: '10px 20px',
      color: '#fff',
      textDecoration: 'none',
    },
  };

  return (
    <nav style={navStyles.nav}>
      <ul style={navStyles.ul}>
        <li><a href="/" style={navStyles.li}>Home</a></li>
        <li><a href="/register" style={navStyles.li}>Create Your Account</a></li>
        <li><a href="/addPet" style={navStyles.li}>Register Your Pet</a></li>
        <li><a href="/Q8FindCatDogPage" style={navStyles.li}>Finf available pets</a></li>
        <li><a href="/PetCare" style={navStyles.li}>Dog and Cat Care</a></li>
        <li><a href="/Q8ContactPage" style={navStyles.li}>Contact</a></li>
        <li><a href="/logout" onClick={handleLogout}>Logout</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
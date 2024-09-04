import React, { useEffect, useState } from 'react';

function Header() {
const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <header>
      <div className="container header">
        <a href="/Q8HomePage.html">
          <img src="/image/logo.png" alt="Adopt A Pet Logo" style={{ maxWidth: '100px' }} />
        </a>
        <h1>Adopt A Pet</h1>
        <p>Website for adopting a cat or dog in your local area.</p>
        <p>Current Time: <span id="dateTimeDisplay">{time}</span></p>
      </div>
    </header>
  );
}

export default Header;
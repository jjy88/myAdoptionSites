import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'lightblue', padding: '5px 10px', textAlign: 'center', fontSize: '12px', lineHeight: 1.2 }}>
      <p style={{ margin: 0 }}>
        <p style={{ fontSize: '12px' }}>Privacy/Disclaimer Statement</p>
      </p>
      <p style={{ margin: '5px 0' }}>
        Your information will not be sold or misused. The website builder is not responsible for any incorrect information posted by a pet owner.
      </p>
    </footer>
  );
}

export default Footer;
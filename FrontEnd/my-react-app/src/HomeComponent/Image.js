import React from 'react';
import logoImage from '../image/Route.svg'; // Import your logo image


export default function Image() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img src={logoImage} alt="Logo" style={{ maxWidth: '100%' }} />
      </div>
    </div>
  );
}

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem' }}>
      <p>© {new Date().getFullYear()} Vinnie Baker. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
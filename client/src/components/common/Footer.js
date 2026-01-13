import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Sithija Wickramasinghe. All rights reserved.</p>
        <p>Built with React & Node.js</p>
      </div>
    </footer>
  );
};

export default Footer;
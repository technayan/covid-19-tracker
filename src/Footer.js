import React from 'react';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {year} | All rights Reserved | Developed by <a target='_blank' href="https://github.com/technayan">Nayan</a>.</p>
        </footer>
    );
};

export default Footer;
import React from 'react'

import './Footer.css';

const Footer = class extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-container">
                    <a href="https://github.com/reedjoe">
                        <i className="fab fa-github footer-icon"></i>
                    </a>
                    <a href="https://linkedin.com/in/joe-reed-developer">
                        <i className="fab fa-linkedin footer-icon"></i>
                    </a>
                </div>
                <div className="footer-container">
                    <p className="copyright">Joe Reed © <script>document.write( new Date().getFullYear() );</script>2020</p>
                </div>

            </footer>
        )
    }
}

export default Footer
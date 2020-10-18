import React from 'react'

import './Footer.css';

const Footer = class extends React.Component {
    render() {
        return (
            <footer>
                <div class="footer-container">
                    <a href="https://github.com/reedjoe">
                        <i class="fab fa-github footer-icon"></i>
                    </a>
                    <a href="https://linkedin.com/in/joe-reed-developer">
                        <i class="fab fa-linkedin footer-icon"></i>
                    </a>
                </div>
                <div class="footer-container">
                    <p class="copyright">Joe Reed © <script>document.write( new Date().getFullYear() );</script>2020</p>
                </div>

            </footer>
        )
    }
}

export default Footer
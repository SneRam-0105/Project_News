import './footer.css'
function Footer() {
    return (




        <footer className="footer">
            <div className="footer-content">

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@newspaper.com</p>
                    <p>Address: 123 Helsinki, Finland</p>
                </div>


                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/advertise">Advertise</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>


                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <a href="https://facebook.com" target="_blank">Facebook</a> |
                    <a href="https://twitter.com" target="_blank">Twitter</a> |
                    <a href="https://instagram.com" target="_blank">Instagram</a>
                </div>
            </div>


            <div className="footer-bottom">
                <p>&copy; 2024 Newspaper Inc. All rights reserved.</p>
            </div>
        </footer>

    )

};
export default Footer;
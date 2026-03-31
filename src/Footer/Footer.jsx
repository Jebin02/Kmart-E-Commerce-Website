import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-4">
            <div className="container">
                <div className="row text-center text-md-start">
                 
                    {/* Logo + Social */}
                    <div className="col-md-3 mb-4">
                        <a className="navbar-brand text-white" href="/" style={{ fontSize: '1.5rem' }}>
                            K <span className="fw-bold">MART</span>
                        </a>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3 footer-icon-row">
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterestP /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-3 mb-4">
                        {/* <ul className="list-unstyled text-white-50 footer-font">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul> */}

                        {/* <ul className="navbar-links">
  <li>
    <Link to="/">
      <button className="nav-btn">Home</button>
    </Link>
  </li>
  <li>
    <Link to="/about">
      <button className="nav-btn">About</button>
    </Link>
  </li>
  <li>
    <Link to="/services">
      <button className="nav-btn">Services</button>
    </Link>
  </li>
  <li>
    <Link to="/contact">
      <button className="nav-btn">Contact</button>
    </Link>
  </li>
  <li>
    <Link to="/login">
      <button className="nav-btn">Login</button>
    </Link>
  </li>
</ul> */}

<h5>Quick Links</h5>
<ul className="list-unstyled text-white-50 footer-font">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/service">Services</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/login">Login</Link></li>
</ul>
                    </div>

                    {/* Terms */}
                    <div className="col-md-3 mb-4">
                        <h5>Terms & Policies</h5>
                        <ul className="list-unstyled text-white-50 footer-font">
                            {/* <li><a href="/terms">Terms & Conditions</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li> */}
                            <li><Link to="/Terms">Terms & Conditions</Link></li>
                            <li><Link to="/Faq">FAQ</Link></li>
                            <li><Link to="/Privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-md-3 mb-4">
                        <h5>Get In Touch</h5>
                        <ul className="list-unstyled text-white-50 footer-font">
                            <li><a href="tel:+914712525444">+91 471 2525444</a></li>
                            <li><a href="mailto:jebinsingh2020@gmail.com">jebinsingh2020@gmail.com</a></li>
                            <li><a href="/support">Support Center</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="text-white" style={{ opacity: 0.2 }} />

                <div className="text-center pb-3">
                    <p className="text-white-50 footer-font m-0">
                        © 2025 KMART. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
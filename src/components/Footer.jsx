import { Linkedin, Instagram, X, PawPrint } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Decorative paw prints */}
      <PawPrint className="footer-paw paw-left" size={42} />
      <PawPrint className="footer-paw paw-right" size={42} />

      <div className="footer-content">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">WanNya</h2>
          <p className="footer-subtitle">
            Personalized Pet Care & Lifestyle App
          </p>
          <p className="footer-text">Everything Your Pet Needs</p>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/wannya/"><Linkedin size={18} /></a>
            <a href="https://www.instagram.com/wannya_jp"><Instagram size={18} /></a>
            <a href="https://x.com/wannya_jp?s=21&t=mPhJMPSVQfhFfttCq7xb7Q"><X size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <p>contactus@wannya.jp</p>
          <p>+81 80-4669-8144</p>
        </div>

        {/* Connect */}
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <p>
            Stay updated with the latest news and pet care tips.
          </p>
        </div>

      </div>

      <div className="footer-divider" />

      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} WanNya. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;

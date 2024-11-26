// import React from "react";
// import "./Footer.css"; // Importing the CSS file for styling
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section about">
//           <h2>About Artsy</h2>
//           <p>
//             Artsy is a leading online marketplace for discovering, buying, and
//             selling art. Our mission is to make art accessible to all.
//           </p>
//         </div>

//         <div className="footer-section links">
//           <h2>Quick Links</h2>
//           <ul>
//             <li>
//               <Link href="/about">About Us</Link>
//             </li>
//             <li>
//               <Link href="/contact">Contact</Link>
//             </li>
//             <li>
//               <Link href="/terms">Terms of Service</Link>
//             </li>
//             <li>
//               <Link href="/privacy">Privacy Policy</Link>
//             </li>
//           </ul>
//         </div>

//         <div className="footer-section social">
//           <h2>Follow Us</h2>
//           <div className="social-icons">
//             <a href="https://facebook.com" className="social-icon">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="https://twitter.com" className="social-icon">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="https://instagram.com" className="social-icon">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="https://linkedin.com" className="social-icon">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} Artsy. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import "./Footer.css"; // Importing the CSS file for styling
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Artsy</h2>
          <p>
            Artsy is a leading online marketplace for discovering, buying, and
            selling art. Our mission is to make art accessible to all.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          <FaPhone /> 8273645678
        </p>
        <p>&copy; {new Date().getFullYear()} Artsy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

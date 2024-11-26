import React from "react";
import "../about/page.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Artsy</h1>
        <p>
          Artsy is a leading online marketplace for discovering, buying, and
          selling art. Our mission is to make art accessible to all.
        </p>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Artsy, we believe that art should be accessible to everyone. Our
            platform connects art enthusiasts with galleries, artists, and
            collectors from around the world, making it easier than ever to
            discover and purchase incredible pieces.
          </p>
        </div>
        <div className="about-section">
          <h2>Our History</h2>
          <p>
            Founded in 2009, Artsy has grown to become a trusted name in the art
            community. Our team is dedicated to curating a diverse and
            high-quality collection of art, ensuring that our customers have
            access to the best the art world has to offer.
          </p>
        </div>
        <div className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Curated collections of contemporary and classic art</li>
            <li>Exclusive pieces from emerging and established artists</li>
            <li>Easy and secure purchasing process</li>
            <li>Worldwide shipping and handling</li>
            <li>Expert advice and customer support</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or need assistance? Feel free to{" "}
            <a href="/contact">contact us</a>. We're here to help you with all
            your art needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

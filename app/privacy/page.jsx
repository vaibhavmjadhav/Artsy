"use client";
import React from "react";

const Privacy = () => {
  return (
    <div className="privacy-page">
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or make a purchase from our
        website.
      </p>
      <h2>Personal Information We Collect</h2>
      <p>
        When you visit the Site, we automatically collect certain information
        about your device, including information about your web browser, IP
        address, time zone, and some of the cookies that are installed on your
        device. Additionally, as you browse the Site, we collect information
        about the individual web pages or products that you view, what websites
        or search terms referred you to the Site, and information about how you
        interact with the Site. We refer to this automatically-collected
        information as "Device Information."
      </p>

      <style jsx>{`
        .privacy-page {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        h1 {
          font-size: 2.5em;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.2em;
          margin-bottom: 20px;
        }

        h2 {
          font-size: 2em;
          margin-bottom: 15px;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2em;
          }

          p {
            font-size: 1.1em;
          }

          h2 {
            font-size: 1.8em;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.8em;
          }

          p {
            font-size: 1em;
          }

          h2 {
            font-size: 1.6em;
          }
        }
      `}</style>
    </div>
  );
};

export default Privacy;

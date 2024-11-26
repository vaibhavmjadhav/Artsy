import React from "react";

const Terms = () => {
  return (
    <div
      className="terms-page"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <h1
        style={{
          fontSize: "2.5em",
          marginBottom: "20px",
          color: "#333",
          borderBottom: "2px solid #333",
        }}
      >
        Terms of Service
      </h1>
      <p style={{ fontSize: "1.2em", marginBottom: "20px", color: "#666" }}>
        Here are the terms of service for using Artsy.
      </p>
      <h2 style={{ fontSize: "2em", marginBottom: "15px", color: "#333" }}>
        1. Acceptance of Terms
      </h2>
      <p style={{ fontSize: "1.1em", marginBottom: "20px", color: "#666" }}>
        By accessing or using Artsy, you agree to be bound by these Terms of
        Service and all applicable laws and regulations. If you do not agree
        with any of these terms, you are prohibited from using or accessing
        Artsy.
      </p>
      <h2 style={{ fontSize: "2em", marginBottom: "15px", color: "#333" }}>
        2. Use License
      </h2>
      <p style={{ fontSize: "1.1em", marginBottom: "20px", color: "#666" }}>
        Permission is granted to temporarily download one copy of the materials
        (information or software) on Artsy's website for personal,
        non-commercial transitory viewing only. This is the grant of a license,
        not a transfer of title, and under this license you may not:
      </p>
      <ul style={{ fontSize: "1.1em", marginBottom: "20px", color: "#666" }}>
        <li>modify or copy the materials;</li>
        <li>
          use the materials for any commercial purpose, or for any public
          display (commercial or non-commercial);
        </li>
        <li>
          attempt to decompile or reverse engineer any software contained on
          Artsy's website;
        </li>
        <li>
          remove any copyright or other proprietary notations from the
          materials; or
        </li>
        <li>
          transfer the materials to another person or "mirror" the materials on
          any other server.
        </li>
      </ul>
      {/* Add more terms with inline styles for responsiveness */}
    </div>
  );
};

export default Terms;


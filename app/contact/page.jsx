// "use client";
// import React, { useState } from "react";
// import axios from "axios";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/api/contact", formData);
//       alert("Message sent successfully!");
//       setFormData({
//         name: "",
//         email: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("Failed to send message. Please try again later.");
//     }
//   };

//   return (
//     <div className="contact-page">
//       <h1>Contact Us</h1>
//       <p>Feel free to reach out to us with any questions or concerns.</p>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <label>Message:</label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       <style jsx>{`
//         .contact-page {
//           padding: 20px;
//           font-family: Arial, sans-serif;
//         }

//         h1 {
//           font-size: 2.5em;
//           margin-bottom: 20px;
//         }

//         p {
//           font-size: 1.2em;
//           margin-bottom: 20px;
//         }

//         form {
//           max-width: 600px;
//           margin: 0 auto;
//         }

//         label {
//           display: block;
//           font-size: 1.2em;
//           margin-bottom: 5px;
//         }

//         input[type="text"],
//         input[type="email"],
//         textarea {
//           width: 100%;
//           padding: 10px;
//           margin-bottom: 10px;
//           font-size: 1.1em;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//           box-sizing: border-box;
//         }

//         textarea {
//           height: 150px;
//         }

//         button {
//           background-color: #007bff;
//           color: #fff;
//           border: none;
//           padding: 10px 20px;
//           font-size: 1.2em;
//           border-radius: 5px;
//           cursor: pointer;
//           transition: background-color 0.3s;
//         }

//         button:hover {
//           background-color: #0056b3;
//         }

//         @media (max-width: 768px) {
//           h1 {
//             font-size: 2em;
//           }

//           p {
//             font-size: 1.1em;
//           }

//           input[type="text"],
//           input[type="email"],
//           textarea {
//             font-size: 1em;
//           }

//           button {
//             font-size: 1.1em;
//           }
//         }

//         @media (max-width: 480px) {
//           h1 {
//             font-size: 1.5em;
//           }

//           p {
//             font-size: 1em;
//           }

//           input[type="text"],
//           input[type="email"],
//           textarea {
//             font-size: 0.9em;
//           }

//           button {
//             font-size: 1em;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Contact;
"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <p>
        <FaPhone /> 8273645678
      </p>

      <p>Feel free to reach out to us with any questions or concerns.</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />

      <style jsx>{`
        .contact-page {
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

        form {
          max-width: 600px;
          margin: 0 auto;
        }

        label {
          display: block;
          font-size: 1.2em;
          margin-bottom: 5px;
        }

        input[type="text"],
        input[type="email"],
        textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          font-size: 1.1em;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
        }

        textarea {
          height: 150px;
        }

        button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 10px 20px;
          font-size: 1.2em;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2em;
          }

          p {
            font-size: 1.1em;
          }

          input[type="text"],
          input[type="email"],
          textarea {
            font-size: 1em;
          }

          button {
            font-size: 1.1em;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.5em;
          }

          p {
            font-size: 1em;
          }

          input[type="text"],
          input[type="email"],
          textarea {
            font-size: 0.9em;
          }

          button {
            font-size: 1em;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
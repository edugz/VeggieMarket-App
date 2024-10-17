import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);

    const formattedFormData = `    
    <b>Name:</b> ${formData.name}<br>
    <br>
    <b>Email:</b> ${formData.email}<br>
    <br>
    <b>Subject:</b> ${formData.subject}<br>
    <br>
    <b>Message:</b> <br>
    ${formData.message}<br>`;

    emailjs
      .send(
        "service_za2z7ac",
        "template_5mmqhsj",
        {
          formData: formattedFormData,
          senderName: formData.name,
        },
        "OM4CUFIGRqyF_5YI6"
      )
      .then(
        (response) => {
          console.log(
            "Email sent succesfully!",
            response.status,
            response.text
          );

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          navigate("/thank-you");
        },

        (error) => {
          console.error("Failed to send email. Error: ", error);
        }
      );
  };

  return (
    <div className="contact-us-main">
      <div className="contact-us-form-container">
        <h2 className="form-title"> Contact Us</h2>
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
          <input
            className="form-input"
            type="text"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
          <input
            className="form-input"
            type="text"
            name="subject"
            value={formData.subject}
            placeholder="Subject"
            onChange={handleChange}
            required
          />
          <textarea
            className="form-textarea"
            name="message"
            value={formData.message}
            placeholder="Your Message..."
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
      <Link to="/">
        <button className="go-back-button">Back</button>
      </Link>
    </div>
  );
}

export default ContactUs;

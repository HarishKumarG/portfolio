import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4240im6",
        "template_v85ky4p",
        e.target,
        "Yi2ibCmt6aAHBbhN-"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;

// Contact.js
import React, { useState } from 'react';
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${form.name}`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <h2>📬 Get in Touch</h2>
      <p>We'd love to hear from you! Send us a sweet message 💌</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send ✉️</button>
      </form>
    </section>
  );
}

export default Contact;

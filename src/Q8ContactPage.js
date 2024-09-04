import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import axios from 'axios';

const ContactPage = () => {
const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [status, setStatus] = useState('');

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
e.preventDefault();
try {
await axios.post('/contact', formData);
setStatus('Message sent successfully!');
setFormData({ name: '', email: '', message: '' });
} catch (error) {
setStatus('Error sending message. Please try again later.');
}
};

return (
<div>
  <Header />
  <Navbar />
  <main>
    <section className="contact-info">
      <h2>Contact Us</h2>
      <p>If you have any queries or need further information, please use the form below or reach out directly:</p>
      <div className="personal-info">
        <p><strong>Emma</strong> </p>
        <p><strong>jjyu4672@gmail.com</strong> </p>
      </div>
    </section>
    <section className="contact-form">
      <h2>Send Us a Message</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
          placeholder="Enter your name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
          placeholder="Enter your email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4"
          placeholder="Type your message here" required></textarea>
        <div className="form-actions">
          <input type="submit" value="Send Message" />
          <input type="reset" value="Clear" onClick={()=> setFormData({ name: '', email: '', message: '' })} />
        </div>
      </form>
      {status && <p>{status}</p>}
    </section>
  </main>
  <Footer />
</div>
);
};

export default ContactPage;
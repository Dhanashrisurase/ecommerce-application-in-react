import React from 'react';
import './ContactUs.scss';
import Navbar from '../ui/layout/Navbar/Navbar';

const ContactUs: React.FC = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
    </>
  );
};

export default ContactUs;
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../../styles/main/Contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_gxm7td7", "template_vfvpiya", form.current, {
                publicKey: 
                "LpVkZ8rI3q7yO8J8n"
            }).then(
                (result) => {
                    alert("Message Sent Successfully!");
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                }
            );
        e.target.reset();
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-card">
                <h2 className="contact-title">Contact Me</h2>
                <p className="contact-description">
                    Let’s collaborate or chat! I’d love to hear from you.
                </p>
                <div className="contact-divider"></div>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-group">
                        <input type="text" name="user_name" placeholder="Your Name" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="user_email" placeholder="Your Email" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Your Message" className="form-input" rows="5" required ></textarea>
                    </div>
                    <button type="submit" className="form-button"> Send Message </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

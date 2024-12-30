// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import "./contact.css";

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import emailjs from '@emailjs/browser';


const ContactData = [
  {
    id:1,
    icon: <MdOutlineEmail />,
    title:"Email",
    info: "Redatech@gmail.com",
    link: "mailto:test@gmail.com",
  },
  {
    id:2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "RedaTech",
    link: "https://m.me/houdareda.99",
  },
  {
    id:3,
    icon: <BsWhatsapp />,
    title:"WhatsApp",
    info: "0123456789",
    link: "https://api.whatsapp.com/send?phone=201112119676",
  }
]


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_u7f5q1c', 'template_4pva35g', form.current, '2wAiGcXmJ2ND8TK6d',)
      e.target.reset()
  };

  return (
    <section className="contact" id="contact">

      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact me</h2>
      </div>

      <div className="container contact_container">

        <div className="contact_options">
          {ContactData.map(({id, icon, title, info, link}) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">Send Message</a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea rows={10} name="message" id="" placeholder="Inter Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

      </div>

    </section>
  );
}

export default Contact;

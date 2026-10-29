import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Copy, Mail, Send } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

const EMAIL = "vishug0708@gmail.com";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/", label: "github.com/vishug0708", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/", label: "linkedin.com/in/visheshgupta07", icon: FaLinkedin },
  { name: "Instagram", href: "https://www.instagram.com/", label: "instagram.com/vishug_7", icon: FaInstagram },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
    if (status) setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio enquiry from ${form.name.trim()}`;
    const body = `Name: ${form.name.trim()}\nReply email: ${form.email.trim()}\n\n${form.message.trim()}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with your message ready to send.");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setStatus(`Email me at ${EMAIL}`);
    }
  };

  return (
    <section id="contact" className="contact-page page-section">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-eyebrow">CONTACT</span>
          <h2>Have an Idea? Let’s Build It.</h2>
          <p>I’m interested in building meaningful web experiences and collaborating on challenging projects.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <a className="contact-detail" href={`mailto:${EMAIL}`}>
              <span className="contact-detail-icon"><Mail size={22} /></span>
              <span className="contact-detail-text">
                <span>Email</span>
                <strong>{EMAIL}</strong>
              </span>
              <button className="contact-copy-button" type="button" onClick={(event) => { event.preventDefault(); handleCopyEmail(); }} aria-label="Copy email address" title="Copy email address">
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </a>

            {socialLinks.slice(0, 2).map((social) => {
              const SocialIcon = social.icon;
              return (
                <a className="contact-detail" href={social.href} target="_blank" rel="noreferrer" key={social.name}>
                  <span className="contact-detail-icon"><SocialIcon size={22} /></span>
                  <span className="contact-detail-text">
                    <span>{social.name}</span>
                    <strong>{social.label}</strong>
                  </span>
                  <ArrowUpRight className="contact-detail-arrow" size={19} />
                </a>
              );
            })}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-fields-row">
              <div className="contact-field">
                <label className="sr-only" htmlFor="contact-name">Your name</label>
                <input id="contact-name" name="name" type="text" placeholder="Your Name" autoComplete="name" value={form.name} onChange={handleChange} required maxLength={100} />
              </div>
              <div className="contact-field">
                <label className="sr-only" htmlFor="contact-email">Your email</label>
                <input id="contact-email" name="email" type="email" placeholder="Your Email" autoComplete="email" value={form.email} onChange={handleChange} required maxLength={254} />
              </div>
            </div>
            <div className="contact-field">
              <label className="sr-only" htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" placeholder="Message" rows={5} value={form.message} onChange={handleChange} required maxLength={5000} />
            </div>
            <button type="submit" className="contact-submit-button">
              <span>Send Message</span><ArrowRight size={20} />
            </button>
            {status && <p className="contact-form-status" role="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

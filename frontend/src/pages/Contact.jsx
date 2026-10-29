import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

const EMAIL = "vishug0708@gmail.com";

const contactCards = [
  {
    type: "email",
    label: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
    iconBg: "dark",
  },
  {
    type: "github",
    label: "github.com/vishug0708",
    href: "https://github.com/vishug0708",
    icon: FaGithub,
    iconBg: "dark",
  },
  {
    type: "linkedin",
    label: "linkedin.com/in/visheshgupta07",
    href: "https://www.linkedin.com/in/visheshgupta07",
    icon: FaLinkedin,
    iconBg: "linkedin",
  },
];

export default function Contact({ theme = "light" }) {
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
          <h2>Have an Idea? Let's Build It.</h2>
          <p>
            I'm interested in building meaningful web experiences and collaborating
            on challenging projects.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            {contactCards.map((card) => {
              const CardIcon = card.icon;
              return (
                <div className="contact-detail" key={card.label}>
                  <div className={`contact-detail-icon icon-bg-${card.iconBg}`}>
                    <CardIcon size={20} />
                  </div>

                  <a
                    href={card.href}
                    target={card.type === "email" ? undefined : "_blank"}
                    rel={card.type === "email" ? undefined : "noreferrer"}
                    className="contact-detail-text"
                  >
                    <strong>{card.label}</strong>
                  </a>

                  {card.type === "email" ? (
                    <button
                      className="contact-action-btn"
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      title="Copy email address"
                    >
                      {copied ? <Check size={17} /> : <Copy size={17} />}
                    </button>
                  ) : (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-action-btn"
                      aria-label={`Open ${card.type}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-fields-row">
              <div className="contact-field">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                />
              </div>
              <div className="contact-field">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  maxLength={254}
                />
              </div>
            </div>
            <div className="contact-field">
              <textarea
                id="contact-message"
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                maxLength={5000}
              />
            </div>
            <button type="submit" className="contact-submit-button">
              <span>Send Message</span>
              <ArrowRight size={17} />
            </button>
            {status && <p className="contact-form-status" role="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

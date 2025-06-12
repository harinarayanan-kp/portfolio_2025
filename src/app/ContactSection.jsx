import React from "react";
import styles from "./custom.module.css";

const ContactSection = () => (
  <section className={styles.contactSection}>
    <h2 className={styles.contactTitle}>Contact</h2>
    <form
      className={styles.contactForm}
      action="mailto:harikpaug18@gmail.com"
      method="POST"
      encType="text/plain"
    >
      <label className={styles.contactLabel}>
        Name
        <input
          className={styles.contactInput}
          type="text"
          name="name"
          required
          autoComplete="name"
        />
      </label>
      <label className={styles.contactLabel}>
        Email
        <input
          className={styles.contactInput}
          type="email"
          name="email"
          required
          autoComplete="email"
        />
      </label>
      <label className={styles.contactLabel}>
        Message
        <textarea
          className={styles.contactTextarea}
          name="message"
          rows={4}
          required
        />
      </label>
      <button className={styles.contactButton} type="submit">
        Send Message
      </button>
    </form>
    <div className={styles.contactSocials}>
      <a
        href="mailto:harikpaug18@gmail.com"
        className={styles.contactSocialLink}
      >
        <img
          src="/socials/gmail.png"
          alt="Email"
          className={styles.contactSocialIcon}
        />
        harikpaug18@gmail.com
      </a>
      <a
        href="https://linkedin.com/in/harinarayanan-kp"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactSocialLink}
      >
        <img
          src="/socials/linkedin.png"
          alt="LinkedIn"
          className={styles.contactSocialIcon}
        />
        LinkedIn
      </a>
      <a
        href="https://github.com/harinarayanan-kp"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactSocialLink}
      >
        <img
          src="/socials/github.png"
          alt="GitHub"
          className={styles.contactSocialIcon}
        />
        GitHub
      </a>
      <a
        href="https://wa.me/917025756836"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactSocialLink}
      >
        <img
          src="/socials/whatsapp.png"
          alt="WhatsApp"
          className={styles.contactSocialIcon}
        />
        WhatsApp
      </a>
    </div>
  </section>
);

export default ContactSection;

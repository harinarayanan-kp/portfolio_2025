import React from "react";
import Image from "next/image";
import styles from "./custom.module.css";
import "./styles/contact.css";

const ContactSection = () => (
  <div className="animatedBG">
    <div className="shape triangle"></div>
    <div className="shape polygon"></div>
    <div className="shape line"></div>
    <div className="gradientOverlay"></div>
    <div className={styles.contactSection}>
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
          <Image
            src="/socials/gmail.png"
            alt="Email"
            width={24}
            height={24}
            className={styles.contactSocialIcon}
            priority
          />
          harikpaug18@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/harinarayanan-kp"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactSocialLink}
        >
          <Image
            src="/socials/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
            className={styles.contactSocialIcon}
            priority
          />
          LinkedIn
        </a>
        <a
          href="https://github.com/harinarayanan-kp"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactSocialLink}
        >
          <Image
            src="/socials/github.png"
            alt="GitHub"
            width={24}
            height={24}
            className={styles.contactSocialIcon}
            priority
          />
          GitHub
        </a>
        <a
          href="https://wa.me/917025756836"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactSocialLink}
        >
          <Image
            src="/socials/whatsapp.png"
            alt="WhatsApp"
            width={24}
            height={24}
            className={styles.contactSocialIcon}
            priority
          />
          WhatsApp
        </a>
      </div>
    </div>
  </div>
);

export default ContactSection;

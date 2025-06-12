"use client";
import React from "react";
import "./links.css";

const links = [
  {
    label: "GitHub",
    url: "https://github.com/harinarayanan-kp",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/harinarayanan-kp/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/harinarayanan.kp",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/harinarayanan.kp.58/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
  },
  {
    label: "WhatsApp",
    url: "https://wa.me/917025756836",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg",
  },
  {
    label: "Behance",
    url: "https://www.behance.net/harinarayanankp",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/behance.svg",
  },
  {
    label: "X",
    url: "https://x.com/Harinarayanan08",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg",
  },
];

export default function LinksPage() {
  return (
    <div className="links-bg">
      <div className="links-container">
        <a href="/" className="links-home-btn" title="Go to Home">
          <img src="/home.png" alt="Home" className="links-home-icon" />
        </a>
        <img src="/pfp2.jpg" alt="Profile" className="links-profile" />
        <h2 className="links-title">Harinarayanan KP</h2>
        <div
          className="links-email"
          style={{
            color: "#444",
            fontSize: 15,
            marginBottom: 10,
            fontFamily: "monospace",
            wordBreak: "break-all",
          }}
        >
          <a
            href="mailto:harikpaug18@gmail.com"
            style={{ color: "#444", textDecoration: "underline" }}
          >
            harikpaug18@gmail.com
          </a>
        </div>
        <div
          className="links-about"
          style={{
            background: "#e3f0ff",
            border: "2.5px solid #111",
            borderRadius: 0,
            boxShadow: "4px 4px 0px #111",
            padding: 18,
            marginBottom: 24,
            color: "#222",
            fontFamily: "monospace",
            fontSize: 16,
            textAlign: "center",
            width: "100%",
          }}
        >
          Let’s connect!
          <br />
          Find me on any of my socials below.
        </div>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="links-btn"
          >
            <img src={link.icon} alt={link.label} className="links-icon" />
            {link.label}
          </a>
        ))}
      </div>
      <div
        style={{
          marginTop: 32,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://buymeacoffee.com/harixn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"
            alt="Buy Me a Coffee"
            style={{
              borderRadius: 0,
              boxShadow: "4px 4px 0px #111",
              border: "2.5px solid #111",
            }}
          />
        </a>
      </div>
    </div>
  );
}

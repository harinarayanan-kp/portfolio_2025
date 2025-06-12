import React, { useState, useEffect } from "react";
import styles from "./custom.module.css";

const captchaQuestions = [
  { q: "How many 🦄 are in '🦄🦄🦄'?", a: "3" },
  { q: "What is 2 + 2?", a: "4" },
  { q: "Type the word 'human' backwards.", a: "namuh" },
  { q: "How many stars ⭐ in '⭐⭐'?", a: "2" },
  { q: "What color is the sky on a clear day? (lowercase)", a: "blue" },
  { q: "Type the first three letters of 'portfolio'", a: "por" },
  { q: "How many letters in 'AI'?", a: "2" },
  { q: "What is the result of 7 - 3?", a: "4" },
  { q: "Type the word 'code' in uppercase.", a: "CODE" },
];

export default function LoadingCaptcha({ onSolved }) {
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(() => {
    const chosen =
      captchaQuestions[Math.floor(Math.random() * captchaQuestions.length)];
    return chosen;
  });
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadAssets = async () => {
      try {
        const font = new FontFace("Canda Tawa", "url(/canda_tawa.ttf)");
        await font.load();
        document.fonts.add(font);
        const imagePromises = ["/chakra.png", "/pfp2.jpg"].map((src) => {
          return new Promise((resolve, reject) => {
            const img = new window.Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        await Promise.all(imagePromises);
        if (isMounted) setAssetsLoaded(true);
      } catch (error) {
        if (isMounted) setAssetsLoaded(true);
      }
    };
    loadAssets();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem("captchaSolved") === "true"
    ) {
      onSolved();
    }
  }, [onSolved]);

  const handleSubmit = () => {
    if (captchaInput.trim().toLowerCase() === captcha.a.toLowerCase()) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("captchaSolved", "true");
      }
      if (assetsLoaded) {
        onSolved();
      }
    } else {
      setCaptchaInput("");
      alert("Try again!");
    }
  };

  return (
    <div
      className={styles.loader}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#e3f0ff",
          border: "2.5px solid #111",
          boxShadow: "4px 4px 0 #111",
          borderRadius: 0,
          padding: 32,
          maxWidth: 340,
          textAlign: "center",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: 28,
            marginBottom: 18,
            fontFamily: "Canda Tawa",
            textDecoration: "underline",
            textDecorationStyle: "wavy",
            color: "#222",
          }}
        >
          Prove you are human to enter!
        </div>
        <div style={{ fontSize: 18, marginBottom: 18 }}>{captcha.q}</div>
        <input
          type="text"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          style={{
            padding: "8px 12px",
            fontSize: 16,
            border: "2px solid #111",
            borderRadius: 0,
            outline: "none",
            marginBottom: 12,
            width: "80%",
            fontFamily: "monospace",
          }}
          placeholder="Your answer..."
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <br />
        <button
          style={{
            background: "#111",
            color: "#6ec1ff",
            border: "2px solid #111",
            borderRadius: 0,
            fontWeight: 700,
            fontSize: 16,
            padding: "6px 22px",
            marginTop: 6,
            cursor: "pointer",
            fontFamily: "monospace",
          }}
          onClick={handleSubmit}
          disabled={!assetsLoaded}
        >
          {assetsLoaded ? "Enter" : "Loading..."}
        </button>
      </div>
    </div>
  );
}

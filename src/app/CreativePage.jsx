import React, { useState } from "react";
import styles from "./custom.module.css";
import ThreeBox from "./components/ThreeBox";

function Monitor() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 0,
      }}
    >
      <div
        style={{
          width: "min(60vw, 120px)",
          height: 18,
          background: "#23272b",
          borderRadius: "16px 16px 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            background: "#6ec1ff",
            borderRadius: "50%",
            marginTop: 2,
            opacity: 0.7,
            boxShadow: "0 0 8px #6ec1ff88",
          }}
        />
      </div>
      <div
        style={{
          background: "#111417",
          borderRadius: "12px 12px 10px 10px",
          overflow: "hidden",
          border: "10px solid #23272b",
          borderBottomWidth: 20,
        }}
      >
        <ThreeBox />
      </div>
    </div>
  );
}

function ConsoleSection({ handleDownload, downloading, consoleText }) {
  const stylesObj = {
    color: "#6ec1ff",
  };
  return (
    <>
      <div className={styles.consoleBody}>
        <span style={stylesObj}>&gt; </span>
        <button
          className={styles.consoleBtn}
          onClick={handleDownload}
          disabled={downloading}
        >
          download_resume()
        </button>
        <span className={styles.consoleCursor}>_</span>
      </div>
      {consoleText && <div className={styles.consoleOutput}>{consoleText}</div>}
    </>
  );
}

const CreativePage = () => {
  const [consoleText, setConsoleText] = useState("");
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    setConsoleText("");
    // Simulate typing effect
    const message = "Downloading resume_harinarayanankp.pdf...";
    for (let i = 1; i <= message.length; i++) {
      setConsoleText(message.slice(0, i));
      await new Promise((res) => setTimeout(res, 30));
    }
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/resume_harinarayanankp.pdf";
      link.download = "resume_harinarayanankp.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => {
        setConsoleText("");
        setDownloading(false);
      }, 1200);
    }, 400);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at 60% 20%, #6ec1ff33 0%, #23272b 80%), repeating-linear-gradient(135deg, #23272b 0 20px, #1a1d20 20px 40px)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Static text above Vibe Coding */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "1.2rem",
          fontFamily: "monospace",
          color: "#ff5f56",
          letterSpacing: 1,
          textShadow: "0 2px 8px #ff5f5677, 0 1px 0 #fff2",
          opacity: 0.93,
          zIndex: 11,
          pointerEvents: "none",
        }}
      >
        dont disturb, he's
      </div>
      {/* Creative floating text */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "2.2rem",
          fontFamily: "Canda Tawa, monospace",
          color: "#6ec1ff",
          letterSpacing: 2,
          textShadow: "0 4px 24px #6ec1ff77, 0 1px 0 #fff2",
          opacity: 0.93,
          zIndex: 10,
          animation: "vibe-float 3.5s ease-in-out infinite alternate",
          pointerEvents: "none",
        }}
      >
        Vibe Coding
      </div>
      <Monitor />
      <div className={styles.resumeConsole}>
        <div className={styles.consoleBar}>
          <span
            className={styles.consoleDot}
            style={{ background: "#ff5f56" }}
          />
          <span
            className={styles.consoleDot}
            style={{ background: "#ffbd2e" }}
          />
          <span
            className={styles.consoleDot}
            style={{ background: "#27c93f" }}
          />
        </div>
        <ConsoleSection
          handleDownload={handleDownload}
          downloading={downloading}
          consoleText={consoleText}
        />
      </div>
      {/* Vibe Coding floating animation keyframes */}
      <style>{`
        @keyframes vibe-float {
          0% { transform: translateX(-50%) translateY(0); }
          100% { transform: translateX(-50%) translateY(18px) scale(1.04); }
        }
      `}</style>
    </div>
  );
};

export default CreativePage;

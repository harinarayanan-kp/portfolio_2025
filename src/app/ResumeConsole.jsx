import React, { useState } from "react";
import styles from "./custom.module.css";
import ThreeBox from "./three/ThreeBox";

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
    <div className={styles.resumeConsoleWrap}>
      {/* Monitor is now outside the console */}
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
    </div>
  );
};

export default CreativePage;

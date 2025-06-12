import React, { useState } from "react";
import styles from "./custom.module.css";

const ResumeConsole = () => {
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
        <div className={styles.consoleBody}>
          <span style={{ color: "#6ec1ff" }}>&gt; </span>
          <button
            className={styles.consoleBtn}
            onClick={handleDownload}
            disabled={downloading}
          >
            download_resume()
          </button>
          <span className={styles.consoleCursor}>_</span>
        </div>
        {consoleText && (
          <div className={styles.consoleOutput}>{consoleText}</div>
        )}
      </div>
    </div>
  );
};

export default ResumeConsole;

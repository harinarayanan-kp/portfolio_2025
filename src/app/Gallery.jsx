"use client";
import React, { useState } from "react";
import styles from "./custom.module.css";

const Gallery = () => {
  const graphicdesign = [
    "https://www.playbook.com/s/creativehari/qPcKLRB8a7mwzG4YSPLtK1pe?assetToken=asVpMH9wGWKCtuYfkcX3dMap",
    // Add more image URLs here
  ];

  const motionGraphicsVideos = [
    "https://www.example.com/video1.mp4",
    "https://www.example.com/video2.mp4",
    // Add more video URLs here
  ];

  const [muted, setMuted] = useState(Array(motionGraphicsVideos.length).fill(true));

  const handleMouseEnter = (index) => {
    const video = document.getElementById(`video-${index}`);
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (index) => {
    const video = document.getElementById(`video-${index}`);
    if (video) {
      video.pause();
    }
  };

  const toggleMute = (index) => {
    const newMuted = [...muted];
    newMuted[index] = !newMuted[index];
    setMuted(newMuted);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "Canda Tawa",
        fontSize: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "80px",
      }}
    >
      <span
        style={{
          textDecoration: "underline",
          textDecorationStyle: "wavy",
          marginBottom: "20px",
        }}
      >
        Look at His works
      </span>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        Graphic Design
        <a
          href="/"
          style={{
            fontSize: "2rem",
            borderRadius: "10px",
            backgroundColor: "pink",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px 20px",
          }}
        >
          view more
        </a>
      </div>
      <div className={styles.scrollbar} style={{ display: "flex", overflowX: "auto" }}>
        {graphicdesign.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Graphic Design ${index + 1}`}
            style={{
              height: 150,
              width: 150,
              backgroundColor: "red",
              margin: 10,
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginTop: "20px",
        }}
      >
        Motion Graphics
        <a
          href="/"
          style={{
            fontSize: "2rem",
            borderRadius: "10px",
            backgroundColor: "pink",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px 20px",
          }}
        >
          view more
        </a>
      </div>
      <div className={styles.scrollbar} style={{ display: "flex", overflowX: "auto" }}>
        {motionGraphicsVideos.map((videoUrl, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              margin: 10,
              flexShrink: 0,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <video
              id={`video-${index}`}
              src={videoUrl}
              style={{
                height: 150,
                width: 250,
                backgroundColor: "black",
              }}
              muted={muted[index]}
            />
            <button
              onClick={() => toggleMute(index)}
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "none",
                color: "white",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              {muted[index] ? "Unmute" : "Mute"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

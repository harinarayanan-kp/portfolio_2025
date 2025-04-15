"use client";
import React, { useState } from "react";
import styles from "./custom.module.css";

const Gallery = () => {
  const graphicdesign = [
    "/graphicdesign/gd1.png",
    "/graphicdesign/gd2.png",
    "/graphicdesign/gd3.png",
    // Add more image URLs here
  ];
  const photographs = [
    "/graphicdesign/gd1.png",
    "/graphicdesign/gd2.png",
    "/graphicdesign/gd3.png",
    // Add more image URLs here
  ];

  const motionGraphicsVideos = [
    // "https://www.example.com/video1.mp4",
    // "https://www.example.com/video2.mp4",
    // Add more video URLs here
  ];

  const [muted, setMuted] = useState(
    Array(motionGraphicsVideos.length).fill(true)
  );

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
    <div>
      <div
        style={{
          width: "100%",
          padding: "15px",
          background: "#FAFCC7",
          overflow: "hidden",
          outline: "7px black solid",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {[
          "Motion Graphics",
          "UI/UX",
          "Graphic design",
          "Web-app",
          "Mobile-App",
        ].map((text, index) => (
          <div
            key={index}
            style={{
              padding: "0",
              background: "transparent",
              borderRadius: 0,
              outline: "none",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              color: "black",
              fontSize: "clamp(24px, 5vw, 48px)",
              fontFamily: "Canda Tawa",
              fontWeight: "400",
              wordWrap: "break-word",
              margin: "10px",
              flex: "1 1 calc(20% - 20px)",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FFDD48";
              e.currentTarget.style.borderRadius = "22px";
              e.currentTarget.style.outline = "3px black solid";
              e.currentTarget.style.outlineOffset = "-3px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderRadius = "10px";
              e.currentTarget.style.outline = "3px transparent solid";
            }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* Original Section */}
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
          {/* Look at His works */}
          AHMM.. THIS WEB PAGE IS UNDER CONSTRUCTION
        </span>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            paddingLeft: "20px",
            paddingRight: "20px",
            fontSize: "2rem",
          }}
        >
          Graphic Design
          <a
            href="/graphic-design"
            style={{
              fontSize: "2rem",
              borderRadius: "10px",
              backgroundColor: "pink",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px 20px",
              fontSize: "2rem",
            }}
          >
            view more
          </a>
        </div>
        <div
          className={styles.scrollbar}
          style={{ display: "flex", overflowX: "auto" }}
        >
          {graphicdesign.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Graphic Design ${index + 1}`}
              style={{
                height: 200,
                width: 200,
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
        <div
          className={styles.scrollbar}
          style={{ display: "flex", overflowX: "auto" }}
        >
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
          Photography
          <a
            href="/photography"
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
        <div
          className={styles.scrollbar}
          style={{ display: "flex", overflowX: "auto" }}
        >
          {photographs.map((photoUrl, index) => (
            <img
              key={index}
              src={photoUrl}
              alt={`Photography ${index + 1}`}
              style={{
                height: 200,
                width: 200,
                backgroundColor: "blue",
                margin: 10,
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

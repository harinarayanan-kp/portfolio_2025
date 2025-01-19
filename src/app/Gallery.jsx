import React from "react";
import styles from "./custom.module.css";

const Gallery = () => {
  const images = [
    
  ]
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
      <div className={styles.scrollbar}>
        <div
          style={{
            height: 150,
            width: 150,
            backgroundColor: "red",
            margin: 10,
            flexShrink: 0,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Gallery;

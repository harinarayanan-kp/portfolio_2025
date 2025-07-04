import React from "react";
import Image from "next/image";
import styles from "../custom.module.css";

const graphicdesign = [
  "/graphicdesign/gd1.png",
  "/graphicdesign/gd2.png",
  "/graphicdesign/gd3.png",
];

const GraphicDesignPage = () => {
  return (
    <div
      className={styles.scrollbar}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 10,
        maxWidth: "90vw",
        margin: "0 auto",
      }}
    >
      {graphicdesign.map((imageUrl, index) => (
        <Image
          key={index}
          src={imageUrl}
          alt={`Graphic Design ${index + 1}`}
          width={400}
          height={400}
          style={{
            height: "auto",
            width: "100%",
            backgroundColor: "red",
            objectFit: "cover",
          }}
          priority={index === 0}
        />
      ))}
    </div>
  );
};

export default GraphicDesignPage;

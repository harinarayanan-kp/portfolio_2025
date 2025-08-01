import React from "react";
import styles from "./custom.module.css";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div className={styles.section} style={{ position: "relative" }}>
      <Image
        src="/wall_bg.png"
        alt="background"
        className={styles.bg_image}
        fill
        style={{
          objectFit: "cover",
          maxWidth: "100%",
        }}
      />
      <div
        style={{
          userSelect: "none",
          pointerEvents: "none",
          position: "absolute",
          display: "flex",
          width: "100%",
          height: "100vh",
          padding: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Image
            src="/screw.png"
            alt="screw"
            width={40}
            height={40}
            style={{ objectFit: "cover" }}
          />
          <Image
            src="/screw.png"
            alt="screw"
            width={40}
            height={40}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Image
            src="/screw.png"
            alt="screw"
            width={40}
            height={40}
            style={{ objectFit: "cover" }}
          />
          <Image
            src="/screw.png"
            alt="screw"
            width={40}
            height={40}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <Image
        src="/anchor.svg"
        alt="title"
        width={500}
        height={500}
        className={styles.anchor}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "200px",
            height: "120px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mixBlendMode: "difference",
          }}
        >
          <Image
            src="/haris.png"
            alt="Hari's"
            fill
            sizes="(max-width: 600px) 100vw, 200px"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              userSelect: "none",
              pointerEvents: "none",
              top: 0,
              left: 0,
              objectFit: "contain",
            }}
            priority
          />
          <div
            style={{
              position: "relative",
              zIndex: 5,
              color: "black",
              fontSize: "3rem",
              fontFamily: "Canda Tawa",
              fontWeight: "400",
              textDecoration: "underline",
              textDecorationStyle: "wavy",
              wordWrap: "break-word",
              textAlign: "center",
            }}
          >
            Hari’s
          </div>
        </div>
        <Image
          src="/portfolio_title.png"
          alt="title"
          width={500}
          height={500}
          className={styles.title}
          priority
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default HomeSection;

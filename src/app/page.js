"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HomeSection from "./Home";
import styles from "./custom.module.css";
import AboutSection from "./AboutSection";
import Gallery from "./Gallery";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import LoadingCaptcha from "./LoadingCaptcha";
import ResumeConsole from "./CreativePage";
import ContactSection from "./ContactSection";
import CreativePage from "./CreativePage";

const imageUrls = [
  "/anchor.svg",
  "/arrow-12.svg",
  "/cambg.png",
  "/chakra.png",
  "/haris.png",
  "/pfp2.jpg",
  "/portfolio_title.png",
  "/screw.png",
  "/wall_bg.png",
  "projects/calcchat.png",
  "projects/huepoint.png",
  "projects/tharikida.png",
  "projects/trek.png",
  "projects/vizzko.png",
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [captchaSolved, setCaptchaSolved] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const loadAssets = async () => {
      try {
        const font = new FontFace("Canda Tawa", "url(/canda_tawa.ttf)");
        await font.load();
        document.fonts.add(font);

        // Preload all images
        const imagePromises = imageUrls.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new window.Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        await Promise.all(imagePromises);
      } catch (error) {
        console.error("Error loading assets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAssets();
  }, []);

  if (!hasMounted) {
    return null;
  }

  if (isLoading || !captchaSolved) {
    return (
      <LoadingCaptcha
        onSolved={() => setCaptchaSolved(true)}
        solved={captchaSolved}
      />
    );
  }

  return (
    <div>
      <HomeSection />
      <Image
        src="/chakra.png"
        alt="chakra"
        width={200}
        height={200}
        className={styles.rotatingImage}
        unoptimized
        priority
        draggable={false}
        style={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <AboutSection />
      <ProjectsSection />
      <CreativePage />
      <SkillsSection />
      <ContactSection />
      {/* <Gallery /> */}
      {/* <span
        style={{
          textDecoration: "underline",
          textDecorationStyle: "wavy",
          textDecorationSkipInk: "none",
          fontFamily: "Canda Tawa",
          fontSize: "3rem",
        }}
      >
        Cool Right?
      </span> */}
    </div>
  );
}

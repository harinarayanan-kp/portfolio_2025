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
import ResumeConsole from "./ResumeConsole";
import ContactSection from "./ContactSection";

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

        const imagePromises = ["/chakra.png", "/pfp2.jpg"].map((src) => {
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
    // Prevent any rendering until after hydration
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
      <ResumeConsole />
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

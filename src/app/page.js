import Image from "next/image";
import HomeSection from "./Home";
import styles from "./custom.module.css";
import AboutSection from "./AboutSection";
import Gallery from "./Gallery";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <Image
        src="/chakra.png"
        alt="chakra"
        objectFit="cover"
        width={200}
        height={200}
        className={styles.rotatingImage}
      />
      <AboutSection />
      <Gallery />
      <span
        style={{
          textDecoration: "underline",
          textDecorationStyle: "wavy",
          textDecorationSkipInk: "none",
          fontFamily: "Canda Tawa",
          fontSize: "3rem",
        }}
      >
        Cool Right?
      </span>
    </div>
  );
}

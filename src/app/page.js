import Image from "next/image";
import HomeSection from "./Home";
import styles from "./custom.module.css";
import AboutSection from "./AboutSection";

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
    </div>
  );
}

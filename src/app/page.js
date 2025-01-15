import Image from "next/image";
import HomeSection from "./Home";
import styles from "./custom.module.css";

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
      <div
        style={{ backgroundColor: "red", height: "100vh", width: "100%" }}
      ></div>
    </div>
  );
}

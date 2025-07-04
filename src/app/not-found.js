"use client";

import Lottie from "lottie-react";
import animationData from "./lotties/Animation - 1751259985086.json";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg,rgb(129, 171, 207) 0%,rgb(33, 28, 58) 100%)",
      }}
    >
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
}

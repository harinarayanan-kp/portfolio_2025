"use client";
import React from "react";
import styles from "./skills.module.css";

const skills = [
  // Programming Languages
  { name: "C", icon: "/skills/c.png" },
  { name: "C++", icon: "/skills/cpp.png" },
  { name: "Python3", icon: "/skills/python3.png" },
  { name: "JavaScript", icon: "/skills/javascript.png" },
  { name: "TypeScript", icon: "/skills/typescript.png" },

  // Web Technologies
  { name: "HTML5", icon: "/skills/html5.png" },
  { name: "CSS3", icon: "/skills/css.png" },
  { name: "React", icon: "/skills/react.png" },
  { name: "Next.js", icon: "/skills/nextjs.png" },
  { name: "Three.js", icon: "/skills/threejs.png" },

  // Cloud & Backend
  { name: "Firebase", icon: "/skills/firebase.png" },
  { name: "GCP", icon: "/skills/googlecloud.png" },
  { name: "Vertex AI", icon: "/skills/vertexai.png" },
  { name: "Docker", icon: "/skills/docker.png" },
  { name: "Linux", icon: "/skills/linux.png" },

  // Other
  { name: "Tensorflow", icon: "/skills/tensorflow.png" },
];

const creativeSkills = [
  { name: "Photoshop", icon: "/skills/photoshop.svg" },
  { name: "Premiere Pro", icon: "/skills/premierepro.svg" },
  { name: "After Effects", icon: "/skills/aftereffects.svg" },
  { name: "Blender", icon: "/skills/blender.svg" },
  { name: "Figma", icon: "/skills/figma.svg" },
];

const SkillsSection = () => (
  <section className={styles.skillsSection}>
    <h2 className={styles.skillsTitle}>His tech-stack</h2>
    <div className={styles.skillsGrid}>
      {skills.map((skill) => (
        <div className={styles.skillCard} key={skill.name}>
          <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
          <span className={styles.skillName}>{skill.name}</span>
        </div>
      ))}
    </div>
    <h3 className={styles.creativeTitle}>Creative Tools he uses:</h3>
    <div className={styles.skillsGrid}>
      {creativeSkills.map((skill) => (
        <div className={styles.skillCard} key={skill.name}>
          <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
          <span className={styles.skillName}>{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;

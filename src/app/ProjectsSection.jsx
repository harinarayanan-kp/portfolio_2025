import React from "react";
import styles from "./custom.module.css";

const projects = [
  {
    title: "Tharikida-UI",
    description:
      "Tharikida UI is a bold, neo-brutalist React component library inspired by Kerala's vibrant yet minimalistic aesthetic. It features a built-in ThemeProvider for easy customization of colors, spacing, and more, letting you create fast, stylish apps with a unique flair. Enjoy a clean, raw, and modern design, lightweight performance, and a growing set of accessible, ready-to-use components—all optimized for developer productivity and creative freedom.",
    image: "projects/tharikida.png",
    link: "https://tharikida-ui.vercel.app/",
  },
  {
    title: "Trek",
    description:
      "Trek-StepIntoStyle is a modern e-commerce site for shoe lovers, built with React and Firebase. It features secure authentication, a rich product catalog, real-time updates, intuitive UI, a feature-rich shopping cart, and responsive design.",
    image: "projects/trek.png",
    link: "https://trek-stepintostyle.web.app/",
  },
  {
    title: "huePoint",
    description:
      "huePoint is a creative hub for artists, built with Flutter and an Express-Node.js backend. It offers live art streaming, an art marketplace, collaboration tools, networking, blogging, and community challenges. Artists can showcase, sell, and co-create art, while art lovers can discover, interact, and purchase.",
    image: "projects/huepoint.png",
    link: "https://github.com/harinarayanan-kp/huepoint",
  },
  {
    title: "calc-chat",
    description:
      "calc-chat is a secret chatting app built with Flutter and Firebase, hidden behind a calculator interface. Users unlock the chat by entering a secret code on the calculator screen. Google authentication is enabled for secure access.",
    image: "projects/calcchat.png",
    link: "https://github.com/harinarayanan-kp/procalc",
  },
  {
    title: "VIZZKO",
    description:
      "VIZZKO is a platform for selling custom t-shirts with user-prompted AI-generated images. Users can design, customize, and order t-shirts with unique prints created using Vertex AI (GCP). Built with TypeScript, Next.js, Express backend, and MongoDB.",
    image: "projects/vizzko.png",
    link: "https://github.com/harinarayanan-kp/vizzko",
  },
];

const ProjectCard = ({ project, descLines }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const displayDesc = isExpanded
    ? project.description
    : descLines.slice(0, 3).join(" ") + (descLines.length > 3 ? "..." : "");
  return (
    <div
      style={{
        background: "#e3f0ff",
        borderRadius: 0,
        boxShadow: "4px 4px 0px rgb(0, 0, 0)",
        padding: 0,
        maxWidth: 350,
        minWidth: 280,
        flex: "0 0 350px",
        display: "flex",
        flexDirection: "column",
        border: "2.5px solid #111",
        overflow: "hidden",
        color: "#111",
        fontFamily: "monospace",
        transition: "height 0.2s",
      }}
    >
      {project.image && (
        <div
          style={{
            background: "#cbe6ff",
            padding: 16,
            borderBottom: "2px solid #111",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "1 / 1",
              borderRadius: 0,
              objectFit: "cover",
              background: "#e3f0ff",
              display: "block",
              maxWidth: "100%",
              boxSizing: "border-box",
            }}
          />
        </div>
      )}
      {/* Title and Description */}
      <div
        style={{
          padding: "18px 16px 0 16px",
          borderBottom: "2px solid #111",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            fontFamily: "monospace",
            marginBottom: 6,
            color: "#111",
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            fontSize: 15,
            color: "#222",
            marginBottom: 10,
            minHeight: 60,
            // Remove fixed height/minHeight when expanded to allow card to grow
            maxHeight: isExpanded ? "none" : 90,
            overflow: isExpanded ? "visible" : "hidden",
            transition: "max-height 0.2s",
          }}
        >
          {displayDesc}
          {descLines.length > 3 && !isExpanded && (
            <button
              style={{
                background: "none",
                border: "none",
                color: "#0070f3",
                cursor: "pointer",
                fontWeight: 600,
                marginLeft: 6,
                fontSize: 15,
                padding: 0,
                textDecoration: "underline",
              }}
              onClick={() => setIsExpanded(true)}
            >
              View more
            </button>
          )}
          {descLines.length > 3 && isExpanded && (
            <button
              style={{
                background: "none",
                border: "none",
                color: "#0070f3",
                cursor: "pointer",
                fontWeight: 600,
                marginLeft: 6,
                fontSize: 15,
                padding: 0,
                textDecoration: "underline",
              }}
              onClick={() => setIsExpanded(false)}
            >
              View less
            </button>
          )}
        </div>
      </div>
      {/* Live Button */}
      <div
        style={{
          padding: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#111",
            border: "2px solid #111",
            color: "#6ec1ff",
            padding: "6px 22px",
            borderRadius: 0,
            fontWeight: 700,
            textDecoration: "none",
            fontSize: 16,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "background 0.2s, color 0.2s",
            letterSpacing: 2,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#6ec1ff";
            e.currentTarget.style.color = "#111";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#111";
            e.currentTarget.style.color = "#6ec1ff";
          }}
        >
          {"<<LIVE>>"}
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      className={styles.section}
      style={{ padding: "40px 0", background: "#fefcf3" }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: 32,
          fontFamily: "Canda Tawa",
          textDecoration: "underline",
          textDecorationStyle: "wavy",
          color: "#222",
        }}
      >
        Check out his Projects
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          justifyContent: "center",
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          alignItems: "flex-start",
        }}
      >
        {projects.map((project, idx) => {
          const maxLineLength = 50;
          const desc = project.description;
          let descLines = [];
          for (let i = 0; i < desc.length; i += maxLineLength) {
            descLines.push(desc.slice(i, i + maxLineLength));
          }
          return (
            <ProjectCard key={idx} project={project} descLines={descLines} />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;

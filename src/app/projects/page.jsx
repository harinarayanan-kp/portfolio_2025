"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ".././styles/project.css";

const projects = [
  {
    title: "Tharikida-UI",
    description:
      "Tharikida UI is a modern, lightweight React component library built for creating fast, elegant, and themeable user interfaces. Focused on clean design and smooth user experience, it provides a growing collection of accessible components that help developers maintain visual consistency while building responsive, polished apps. Every component is crafted with attention to usability, clarity, and flexibility, making it easy to integrate into any React project.\nThe library supports full theming capabilities through a centralized ThemeProvider, allowing global control over colors, typography, and corner radii. Components are highly customizable with flexible props and style overrides, enabling both rapid prototyping and fine-tuned production-ready designs. Tharikida UI is optimized for performance with minimal dependencies and is built using modern React practices like composition, hooks, and modular design patterns.\nWith a rich set of components—Buttons, Modals, Inputs, Cards, Tables, and more—Tharikida UI empowers developers to ship beautiful interfaces faster. Backed by active development and over 1000+ downloads in the past year, it’s a solid choice for teams seeking a reliable, customizable design system for scalable frontend development.",
    image: [
      "projects/tharikida.png",
      "projects/tharikida2.png",
      "projects/tharikida3.png",
      "projects/tharikida4.png",
    ],
    link: "https://tharikida-ui.vercel.app/",
  },
  {
    title: "Trek",
    description:
      "Trek-StepIntoStyle is a modern e-commerce site for shoe lovers, built with React and Firebase. It features secure authentication, a rich product catalog, real-time updates, intuitive UI, a feature-rich shopping cart, and responsive design.",
    image: ["projects/trek.png"],
    link: "https://trek-stepintostyle.web.app/",
  },
  {
    title: "huePoint",
    description:
      "huePoint is a creative hub for artists, built with Flutter and an Express-Node.js backend. It offers live art streaming, an art marketplace, collaboration tools, networking, blogging, and community challenges. Artists can showcase, sell, and co-create art, while art lovers can discover, interact, and purchase.",
    image: [
      "projects/huepoint.png",
      "projects/huepoint2.jpg",
      "projects/huepoint3.jpg",
      "projects/huepoint4.jpg",
    ],
    link: "https://github.com/harinarayanan-kp/huepoint",
    buttonText: "github",
  },
  {
    title: "calc-chat",
    description:
      "calc-chat is a secret chatting app built with Flutter and Firebase, hidden behind a calculator interface. Users unlock the chat by entering a secret code on the calculator screen. Google authentication is enabled for secure access.",
    image: [
      "projects/calcchat.png",
      "projects/calcchat2.jpg",
      "projects/calcchat3.jpg",
      "projects/calcchat4.jpg",
    ],
    link: "https://github.com/harinarayanan-kp/procalc",
    buttonText: "github",
  },
  {
    title: "VIZZKO",
    description:
      "Vizzko is an AI-powered platform that redefines personalized fashion by turning simple text prompts into custom T-shirt designs. Users just describe their ideas, and Vizzko generates stunning front and back artwork along with a matching base color, all visualized on a 3D T-shirt model using advanced tools like Gemini 2.5 Flash and Vertex AI Imagen 4. With a seamless interface and instant preview, users can fine-tune their creations, select size, enter delivery details, and get their one-of-a-kind apparel delivered straight to their door.\nVizzko is an AI-powered platform that redefines personalized fashion by turning simple text prompts into custom T-shirt designs. Users just describe their ideas, and Vizzko generates stunning front and back artwork along with a matching base color, all visualized on a 3D T-shirt model using advanced tools like Gemini 2.5 Flash and Vertex AI Imagen 4. With a seamless interface and instant preview, users can fine-tune their creations, select size, enter delivery details, and get their one-of-a-kind apparel delivered straight to their door.\nAs a prototype with over-the-cloud scalability and potential partnerships with local print services, Vizzko aims to create a creator-driven community, enabling users to like, share, and even collaborate on designs. Future plans include integrating transparent image generation, optimizing AI output for print-ready assets, and building a full production pipeline. Vizzko is where fashion meets generative AI—designed, previewed, and worn by you.",
    image: [
      "projects/vizzko.png",
      "projects/vizzko2.png",
      "projects/vizzko3.png",
    ],
    link: "https://github.com/harinarayanan-kp/vizzko",
    buttonText: "github",
  },
];

const ProjectCard = ({ project, descLines, onPopup }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const displayDesc = isExpanded
    ? project.description
    : descLines.slice(0, 3).join(" ") + (descLines.length > 3 ? "..." : "");
  return (
    <div className="project-card">
      {project.image && project.image[0] && (
        <div className="project-card-image">
          <Image
            src={
              project.image[0].startsWith("/")
                ? project.image[0]
                : "/" + project.image[0]
            }
            alt={project.title}
            width={400}
            height={240}
            style={{
              objectFit: "cover",
              width: "100%",
              height: 180,
              borderRadius: 0,
            }}
            priority
          />
        </div>
      )}
      {/* Title and Description */}
      <div
        style={{ padding: "18px 16px 0 16px", borderBottom: "2px solid #111" }}
      >
        <div className="project-card-title">{project.title}</div>
        <div className={`project-card-desc${isExpanded ? " expanded" : ""}`}>
          {displayDesc}
          {descLines.length > 3 && !isExpanded && (
            <button
              className="project-card-viewmore"
              onClick={() => onPopup(project)}
            >
              View more
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
          className="project-card-btn"
          onMouseOver={(e) => {
            e.currentTarget.classList.add("hover");
          }}
          onMouseOut={(e) => {
            e.currentTarget.classList.remove("hover");
          }}
        >
          {project.buttonText || "<<LIVE>>"}
        </a>
      </div>
    </div>
  );
};

// Popup component with manual carousel
function ProjectPopup({ project, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);

  // Prevent background scroll when popup is open
  useEffect(() => {
    if (project) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      setImgIdx(0); // Reset to first image on open
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [project]);

  if (!project) return null;
  const images = Array.isArray(project.image) ? project.image : [];
  const hasImages = images.length > 0;

  const prevImg = (e) => {
    e.stopPropagation();
    setImgIdx((idx) => (idx - 1 + images.length) % images.length);
  };
  const nextImg = (e) => {
    e.stopPropagation();
    setImgIdx((idx) => (idx + 1) % images.length);
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1000,
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#e3f0ff",
          borderRadius: 0,
          maxWidth: 700,
          width: "95vw",
          maxHeight: "90vh",
          boxShadow: "8px 8px 0px #111, 0 8px 32px #000a",
          padding: 0,
          position: "relative",
          fontFamily: "monospace",
          border: "2.5px solid #111",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 14,
            background: "#fff",
            border: "2px solid #111",
            borderRadius: "50%",
            fontSize: 22,
            color: "#111",
            cursor: "pointer",
            fontWeight: 700,
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "2px 2px 0 #111",
            zIndex: 2,
          }}
          aria-label="Close"
        >
          ×
        </button>
        {hasImages && (
          <div
            style={{
              background: "#cbe6ff",
              padding: 16,
              borderBottom: "2px solid #111",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
              position: "relative",
            }}
          >
            {/* Prev button */}
            {images.length > 1 && (
              <button
                onClick={prevImg}
                style={{
                  background: "#fff",
                  border: "2px solid #111",
                  borderRadius: "50%",
                  fontSize: 22,
                  color: "#111",
                  cursor: "pointer",
                  fontWeight: 700,
                  width: 36,
                  height: 36,
                  marginRight: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "2px 2px 0 #111",
                  zIndex: 2,
                  userSelect: "none",
                }}
                aria-label="Previous image"
              >
                {"‹"}
              </button>
            )}
            <Image
              src={
                images[imgIdx].startsWith("/")
                  ? images[imgIdx]
                  : "/" + images[imgIdx]
              }
              alt={project.title + " " + (imgIdx + 1)}
              width={480}
              height={480}
              style={{
                width: "80%",
                maxWidth: 480,
                maxHeight: 480,
                height: "auto",
                borderRadius: 0,
                objectFit: "contain",
                background: "#e3f0ff",
                display: "block",
                boxSizing: "border-box",
                margin: "0 auto",
                transition: "all 0.2s",
              }}
              priority
            />
            {/* Next button */}
            {images.length > 1 && (
              <button
                onClick={nextImg}
                style={{
                  background: "#fff",
                  border: "2px solid #111",
                  borderRadius: "50%",
                  fontSize: 22,
                  color: "#111",
                  cursor: "pointer",
                  fontWeight: 700,
                  width: 36,
                  height: 36,
                  marginLeft: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "2px 2px 0 #111",
                  zIndex: 2,
                  userSelect: "none",
                }}
                aria-label="Next image"
              >
                {"›"}
              </button>
            )}
          </div>
        )}
        {hasImages && images.length > 1 && (
          <div
            style={{
              textAlign: "center",
              fontSize: 13,
              color: "#222",
              margin: "6px 0 -6px 0",
              letterSpacing: 1,
              fontFamily: "monospace",
              userSelect: "none",
            }}
          >
            {imgIdx + 1} / {images.length}
          </div>
        )}
        <div
          style={{
            padding: "22px 18px 0 18px",
            borderBottom: "2px solid #111",
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              fontFamily: "monospace",
              marginBottom: 10,
              color: "#111",
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#222",
              marginBottom: 18,
              whiteSpace: "pre-line",
              lineHeight: 1.9,
            }}
          >
            {project.description}
          </div>
        </div>
        <div
          style={{
            padding: 18,
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
              padding: "8px 28px",
              borderRadius: 0,
              fontWeight: 700,
              textDecoration: "none",
              fontSize: 17,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              letterSpacing: 2,
              transition: "background 0.2s, color 0.2s",
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
            {project.buttonText || "<<LIVE>>"}
          </a>
        </div>
      </div>
    </div>
  );
}

const ProjectsSection = () => {
  const [popupProject, setPopupProject] = useState(null);

  return (
    <section style={{ padding: "40px 0", background: "#fefcf3" }}>
      <div style={{ display: "flex" }}>
        <Image
          src="/arrow-12.svg"
          alt=""
          width={100}
          height={100}
          style={{
            margin: "0 auto",
            display: "block",
          }}
          priority
        />
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
          His Projects
        </h2>
        <Image
          src="/arrow-12.svg"
          alt=""
          width={100}
          height={100}
          style={{
            margin: "0 auto",
            display: "block",
          }}
          priority
        />
      </div>
      <div
        className="project-cards-row-container"
        style={{ overflowX: undefined, position: undefined }}
      >
        <div
          id="project-cards-row"
          className="project-cards-row"
          style={{ overflowX: undefined, flexWrap: "wrap" }}
        >
          {projects.map((project, idx) => {
            const maxLineLength = 50;
            const desc = project.description;
            let descLines = [];
            for (let i = 0; i < desc.length; i += maxLineLength) {
              descLines.push(desc.slice(i, i + maxLineLength));
            }
            return (
              <ProjectCard
                key={idx}
                project={project}
                descLines={descLines}
                onPopup={setPopupProject}
              />
            );
          })}
        </div>
      </div>
      <ProjectPopup
        project={popupProject}
        onClose={() => setPopupProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;

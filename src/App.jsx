import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import { useProject } from "./context/ProjectContext";
import Footer from "./components/Footer/Footer";

const links = [
  { label: "Home", path: "#home" },
  { label: "Work", path: "#work" },
  { label: "About", path: "#about" },
  { label: "Experience", path: "#experience" },
  { label: "Contact", path: "#contact" },
];

export default function App() {
  const openForWork = true;
  const { projects } = useProject();
  const techStack = [
    "devicon-react-original",
    "devicon-docker-plain",
    "devicon-mongodb-plain",
    "devicon-nodejs-plain",
    "devicon-csharp-plain",
    "devicon-microsoftsqlserver-plain",
    "devicon-css3-plain",
    "devicon-git-plain",
    "devicon-javascript-plain",
    "devicon-python-plain",
    "devicon-html5-plain",
  ];

  return (
    <div id="home">
      <Header links={links} buttonText="Resume" />
      <HeroSection
        openForWork={openForWork}
        Title={
          <>
            Hi, I’m Muzuvukile, a{" "}
            <span className="highlight">Full Stack Developer</span> building
            scalable apps with thoughtful design.
          </>
        }
        techStack={techStack}
      />

      <ProjectSection projects={projects} />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

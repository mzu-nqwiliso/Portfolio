import React from "react";
import { createContext, useContext } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const projects = [
    {
      title: "Sliik&Co.",
      description:
        "Full-featured fashion store powered by React, Node.js, MongoDB & Stripe. Clean design meets robust functionality.",
      image:
        "https://res.cloudinary.com/dmvrtwdp0/image/upload/v1772618526/light_fqvbdz.png",
      link: "https://www.sliikco.store/",
      techStack: ["React", "MongoDB", "Node.js", "Stripe"],
      logo: "https://res.cloudinary.com/dmvrtwdp0/image/upload/v1772618747/sliikco-logo_bg9d4s.webp",
      type: "website",
    },
    {
      title: "Sitewise",
      description:
        "Modern luxury chair store powered by HTML, CSS & JavaScript. Clean design meets smooth, responsive functionality.",
      image:
        "https://res.cloudinary.com/dmvrtwdp0/image/upload/v1772614173/Sitewise_1_zlsefu.png",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://www.fennic.site/",
      logo: "https://res.cloudinary.com/dmvrtwdp0/image/upload/v1772614557/sitewise-logo_ixgm8b.png",
      type: "website",
    },
    {
      title: "Fiscora",
      description:
        "Modern personal finance tracker crafted in Figma. Sleek mobile UI meets effortless budget control and spending clarity.",
      image:
        "https://res.cloudinary.com/dmvrtwdp0/image/upload/v1772614173/fiscora-mockup_ageuml.webp",
      techStack: ["Figma", "Mobile Design"],
      link: "https://admin.sliikco.store/",
      logo: "https://res.cloudinary.com/dmvrtwdp0/image/upload/v1772737500/Fiscora_tb6eol.png",
      type: "design",
      video:
        "https://res.cloudinary.com/dmvrtwdp0/video/upload/v1773373331/fiscora_fh94j3.mp4",
    },
    // {
    //   title: "EventLink",
    //   description:
    //     "Mobile app connecting rural communities with real-time local events, news, and announcements to keep everyone engaged.",
    //   image:
    //     "https://res.cloudinary.com/dmvrtwdp0/image/upload/v1773373958/eventlink-mockup_nrglyh.png",
    //   techStack: ["Flutter", "Dart", "Firebase"],
    //   link: "https://github.com/mzu-nqwiliso/Eventlink",
    //   logo: "https://res.cloudinary.com/dmvrtwdp0/image/upload/v1773373970/pin_kxkjji.png",
    //   type: "app",
    // },
  ];

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  return useContext(ProjectContext);
};

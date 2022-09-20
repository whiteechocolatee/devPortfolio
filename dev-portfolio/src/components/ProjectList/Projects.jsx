import React from "react";

import styles from "./projects.module.css";

import nnwrbl from "./img/nnwrblShop.png";
import grib from "./img/gribUa.png";
import elitasTravel from "./img/ElitasTravel.png";
import shareNote from "./img/shareNote.png";
import developerPortfolio from "./img/developerPortfolio.png";

import { ProjectCard } from "./ProjectCard/ProjectCard";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation(["projects"]);

  const projects = [
    {
      id: 1,
      title: t("gribTitle"),
      img: grib,
      description: t("gribDescription"),
      previewLink: "http://google.com",
      githubLink:
        "https://github.com/whiteechocolatee/navShop",
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
      ],
    },
    {
      id: 2,
      title: t("nnwrblTitle"),
      img: nnwrbl,
      description: t("nnwrblDescription"),
      githubLink:
        "https://github.com/whiteechocolatee/shop",
      technologies: ["SQL", "Express", "Pug", "Node.js"],
    },
    {
      id: 3,
      title: t("thatsMyNoteTitle"),
      img: shareNote,
      description: t("thatsMyNoteDescription"),
      githubLink:
        "https://github.com/whiteechocolatee/thatsMyNote",
      technologies: ["React", "React-Router-Dom"],
    },
    {
      id: 4,
      title: t("devPortfolioTitle"),
      img: developerPortfolio,
      description: t("devPortfolioDescription"),
      githubLink:
        "https://github.com/whiteechocolatee/devPortfolio",
      technologies: ["React", "Framer-Motion"],
    },
    {
      id: 5,
      title: t("elitasTitle"),
      img: elitasTravel,
      description: t("elitasDescription"),
      githubLink:
        "https://github.com/whiteechocolatee/ElitasTravel",
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
      ],
    },
  ];

  return (
    <div className={styles.projectsContainer}>
      <div
        className={`${styles.projectsTitle} projects-title`}>
        <h3>{t("title")}</h3>
        <p>{t("description")}</p>
      </div>
      <div className={styles.projectsList}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            img={project.img}
            description={project.description}
            preview={project.previewLink}
            code={project.githubLink}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

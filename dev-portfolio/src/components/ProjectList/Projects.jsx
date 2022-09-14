import React from "react";

import styles from "./projects.module.css";

import nnwrbl from "./img/nnwrblShop.png";
import grib from "./img/gribUa.png";
import elitasTravel from "./img/ElitasTravel.png";
import shareNote from "./img/shareNote.png";

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
    },
    {
      id: 2,
      title: t("nnwrblTitle"),
      img: nnwrbl,
      description: t("nnwrblDescription"),
      githubLink:
        "https://github.com/whiteechocolatee/shop",
    },
    {
      id: 3,
      title: t("thatsMyNoteTitle"),
      img: shareNote,
      description: t("thatsMyNoteDescription"),
      githubLink:
        "https://github.com/whiteechocolatee/thatsMyNote",
    },
    {
      id: 4,
      title: t("elitasTitle"),
      img: elitasTravel,
      description: t("elitasDescription"),
      githubLink:
        "https://github.com/whiteechocolatee/ElitasTravel",
    },
    // mock data
    {
      id: 5,
      title: t("elitasTitle"),
      img: 'elitasTravel',
      description: t("elitasDescription"),
      githubLink:
        "https://github.com/whiteechocolatee/ElitasTravel",
    },
    {
      id: 6,
      title: t("gribTitle"),
      img: 'grib',
      description: t("gribDescription"),
      previewLink: "http://google.com",
      githubLink:
        "https://github.com/whiteechocolatee/navShop",
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
          />
        ))}
      </div>
    </div>
  );
};

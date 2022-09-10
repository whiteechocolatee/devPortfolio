import React from "react";

import styles from "./projects.module.css";

import nnwrbl from "./img/nnwrblShop.png";
import grib from "./img/gribUa.png";
import elitasTravel from "./img/ElitasTravel.png";
import { ProjectCard } from "./ProjectCard/ProjectCard";

const projects = [
  {
    id: 1,
    title: `Electronics store "GRIB"`,
    img: grib,
    description: `Full-Stack project was written using technologies
                  such as MongoDB, Node JS, React, Redux-Toolkit, Express.
                  Figma was also used.
                  A full-fledged commercial online store with an admin panel for managing the store, with the ability to register a user.
                  Was developed in two months alone. The second full-fledged project`,
    previewLink: "http://google.com",
    githubLink:
      "https://github.com/whiteechocolatee/navShop",
  },
  {
    id: 2,
    title: `Clothing store "NNWRBL"`,
    img: nnwrbl,
    description: `  Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Amet beatae iusto ad unde
    itaque, asperiores totam fugit perferendis
    deserunt at doloribus pariatur quasi iure
    eligendi sint aliquam magni accusantium cumque
    facere officiis hic vel laboriosam. Doloremque
    exercitationem dolorem earum quos consequuntur
    ut corrupti nobis molestias veritatis
    voluptatem, cumque hic voluptas!`,
    githubLink: "https://github.com/whiteechocolatee/shop",
  },
  {
    id: 3,
    title: `GTA V store "ElitasTravel"`,
    img: elitasTravel,
    description: `Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Amet beatae iusto ad unde
    itaque, asperiores totam fugit perferendis
    deserunt at doloribus pariatur quasi iure
    eligendi sint aliquam magni accusantium cumque
    facere officiis hic vel laboriosam. Doloremque
    exercitationem dolorem earum quos consequuntur
    ut corrupti nobis molestias veritatis
    voluptatem, cumque hic voluptas!`,
    githubLink:
      "https://github.com/whiteechocolatee/ElitasTravel",
  },
];

export const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <div
        className={`${styles.projectsTitle} projects-title`}>
        <h3>Projects</h3>
        <p>Things I’ve built so far</p>
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

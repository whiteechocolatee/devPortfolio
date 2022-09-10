import React from "react";

import styles from "./stack.module.css";

import html from "./TechnologyImg/html.png";
import css from "./TechnologyImg/css.png";
import js from "./TechnologyImg/js.png";
import react from "./TechnologyImg/react.png";
import redux from "./TechnologyImg/redux.png";
import bootstrap from "./TechnologyImg/bootstrap.png";
import mongodb from "./TechnologyImg/mongodb.png";
import sql from "./TechnologyImg/sql.png";
import git from "./TechnologyImg/git.png";
import github from "./TechnologyImg/github.png";
import node from "./TechnologyImg/node.png";
import vscode from "./TechnologyImg/vscode.png";

const images = [
  { id: 1, path: html, alt: "html" },
  { id: 2, path: css, alt: "css" },
  { id: 2, path: js, alt: "js" },
  { id: 2, path: react, alt: "react" },
  { id: 2, path: redux, alt: "redux" },
  { id: 2, path: bootstrap, alt: "bootstrap" },
  { id: 2, path: mongodb, alt: "mongodb" },
  { id: 2, path: sql, alt: "sql" },
  { id: 2, path: git, alt: "git" },
  { id: 2, path: github, alt: "github" },
  { id: 2, path: node, alt: "node" },
  { id: 2, path: vscode, alt: "vscode" },
];

export const TechStack = () => {
  return (
    <article className={styles.techStack}>
      <div className={`${styles.techStackTitle} tech-title`}>
        <h3>My Tech Stack</h3>
        <p> Technologies I’ve been working with recently</p>
      </div>
      <div className={styles.imgBlock}>
        {images.map((image) => (
          <div className={styles.img}>
            <img
              className='img-fluid'
              src={image.path}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </article>
  );
};

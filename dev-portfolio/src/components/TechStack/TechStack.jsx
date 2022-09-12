import React from "react";
import { useTranslation } from "react-i18next";

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
  { id: 3, path: js, alt: "js" },
  { id: 4, path: react, alt: "react" },
  { id: 5, path: redux, alt: "redux" },
  { id: 6, path: bootstrap, alt: "bootstrap" },
  { id: 7, path: mongodb, alt: "mongodb" },
  { id: 8, path: sql, alt: "sql" },
  { id: 9, path: git, alt: "git" },
  { id: 10, path: github, alt: "github" },
  { id: 11, path: node, alt: "node" },
  { id: 12, path: vscode, alt: "vscode" },
];

export const TechStack = () => {
  const { t } = useTranslation('techstack');

  return (
    <article className={styles.techStack}>
      <div
        className={`${styles.techStackTitle} tech-title`}>
        <h3>{t('title')}</h3>
        <p>{t('description')}</p>
      </div>
      <div className={styles.imgBlock}>
        {images.map((image) => (
          <div key={image.id} className={styles.img}>
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

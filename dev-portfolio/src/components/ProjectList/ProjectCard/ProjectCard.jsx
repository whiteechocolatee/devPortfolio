import React from "react";
import { FiLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

import styles from "./projectCard.module.css";

export const ProjectCard = ({
  title,
  img,
  description,
  preview,
  code,
  technologies,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className={`${styles.projectCard} project-card`}>
      <div className={styles.projectImg}>
        <img src={img} className='img-fluid' alt='' />
      </div>
      <div
        className={`${styles.projectDescription} project-desc`}>
        <h4>{title}</h4>
        <p className={styles.projectText}>{description}</p>
        <div className={`${styles.technologies} techstack`}>
          <span>Techstack: </span>
          {technologies.join(",")}
        </div>
        <div className={`${styles.links} project-links`}>
          {preview ? (
            <span>
              <FiLink />
              <a
                href={preview}
                rel='noreferrer'
                target='_blank'>
                Live preview
              </a>
            </span>
          ) : null}
          <span>
            <FiGithub />
            <a href={code} rel='noreferrer' target='_blank'>
              View code
            </a>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import styles from "./aboutPage.module.css";
import { ExperienceCard } from "./ExperienceCard/ExperienceCard";
import { containerVariants } from "../pageAnimations";

export const About = () => {
  window.scroll(0, 0);

  const { t } = useTranslation(["about"]);

  const projects = [
    {
      id: 1,
      title: "Front-end Developer (NNWRBL)",
      place: t("city"),
      workFormat: t("fulltime"),
      workDuration: "05/2022 - 06/2022",
      workPlace: "Freelance",
    },
    {
      id: 2,
      title: "Full-stack Developer (Pet-project)",
      place: t("city"),
      workFormat: t("fulltime"),
      workDuration: "06/2022 - 07/2022",
      workPlace: "Freelance",
    },
    {
      id: 3,
      title: "Full-stack Developer (Grib)",
      place: t("city"),
      workFormat: t("fulltime"),
      workDuration: "07/2022 - 09/2022",
      workPlace: "Freelance",
    },
  ];

  const education = [
    {
      id: 1,
      title: t("collegeDiploma"),
      place: t("city"),
      workFormat: t("fulltime"),
      workDuration: "09/2015 - 06/2019",
      workPlace: t("college"),
    },
    {
      id: 2,
      title: t("universityDiploma"),
      place: t("city"),
      workFormat: t("fulltime"),
      workDuration: "09/2019 - 06/2022",
      workPlace: t("university"),
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={`${styles.aboutPage} container-lg `}>
      <div
        className={`${styles.main} content-wrapper about-page`}>
        <h1>{t("aboutMeTitle")}</h1>
        <article
          className={`${styles.aboutMeDescription} about-me-description`}>
          <p className={styles.description}>
            {t("aboutMe")}
          </p>
        </article>
        <h1>{t("workTitle")} </h1>
        <article
          className={`${styles.workExperience} work-experience`}>
          {projects.map((project) => (
            <ExperienceCard
              key={project.id}
              title={project.title}
              place={project.place}
              workDuration={project.workDuration}
              workFormat={project.workFormat}
              workPlace={project.workPlace}
            />
          ))}
        </article>
        <h1>{t("educationExperience")} </h1>
        <article
          className={`${styles.workExperience} work-experience`}>
          {education.map((educationalInstitution) => (
            <ExperienceCard
              key={educationalInstitution.id}
              title={educationalInstitution.title}
              place={educationalInstitution.place}
              workDuration={
                educationalInstitution.workDuration
              }
              workFormat={educationalInstitution.workFormat}
              workPlace={educationalInstitution.workPlace}
            />
          ))}
        </article>
      </div>
    </motion.div>
  );
};

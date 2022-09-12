import React from "react";

import styles from "./aboutPage.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ExperienceCard } from "./ExperienceCard/ExperienceCard";

const projects = [
  {
    id: 1,
    title: "Front-end Developer (NNWRBL)",
    place: "Kharkiv",
    workFormat: "Full time",
    workDuration: "May 2022 - June 2022",
    workPlace: "Freelance",
  },
  {
    id: 2,
    title: "Full-stack Developer (Pet-project)",
    place: "Kharkiv",
    workFormat: "Full time",
    workDuration: "June 2022 - July 2022",
    workPlace: "Freelance",
  },
  {
    id: 1,
    title: "Full-stack Developer (Grib)",
    place: "Kharkiv",
    workFormat: "Full time",
    workDuration: "Jule 2022 - Sept. 2022",
    workPlace: "Freelance",
  },
];

const education = [
  {
    id: 1,
    title: "Diploma Maintenance of software components",
    place: "Kharkiv",
    workFormat: "Full time",
    workDuration: "Sept. 2015 - June 2019",
  },
  {
    id: 2,
    title:
      "Diploma of Bachelor Electrical engineering systems",
    place: "Kharkiv",
    workFormat: "Full time",
    workDuration: "Sept. 2019 - June 2022",
  },
];

export const About = () => {
  window.scroll(0, 0);

  return (
    <div className={`${styles.aboutPage} container-lg`}>
      <Header />
      <div
        className={`${styles.main} content-wrapper about-page`}>
        <h1>About me</h1>
        <article
          className={`${styles.aboutMeDescription} about-me-description`}>
          <p className={styles.description}>
            {" "}
            Hello! My name is Andrey Black. And as you could
            understand - I like development, and
            specifically front-end :). At the moment I am a
            developer who develops websites using React &
            Redux, I also write the backend for my projects.
            Here you can learn more about my experience.
            Good luck :)
          </p>
        </article>
        <h1>Work Experience </h1>
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
        <h1>Education </h1>
        <article
          className={`${styles.workExperience} work-experience`}>
          {education.map((project) => (
            <ExperienceCard
              key={project.id}
              title={project.title}
              place={project.place}
              workDuration={project.workDuration}
              workFormat={project.workFormat}
            />
          ))}
        </article>
      </div>
      <Footer />
    </div>
  );
};

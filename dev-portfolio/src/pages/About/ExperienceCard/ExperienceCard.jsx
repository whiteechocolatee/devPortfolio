import React from "react";
import {
  BiBuildingHouse,
  BiCalendar,
} from "react-icons/bi";

import styles from "./experienceCard.module.css";

export const ExperienceCard = ({
  title,
  place,
  workFormat,
  workDuration,
  workPlace,
}) => {
  return (
    <div
      className={`${styles.experienceCard} experience-card`}>
      <div className={styles.experienceInfo}>
        <p className={styles.experienceTitle}>{title}</p>
        <p className={styles.experiencePlace}>
          <span>
            <BiBuildingHouse />
            <span> {place}</span>
          </span>
          <span className={styles.workPlace}>{workPlace}</span>
        </p>
      </div>
      <div className={styles.experienceDuration}>
        <span className={styles.experienceFormat}>
          {workFormat}
        </span>
        <p className={styles.experienceDate}>
          <BiCalendar /> {workDuration}
        </p>
      </div>
    </div>
  );
};

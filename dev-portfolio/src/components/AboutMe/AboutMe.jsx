import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./aboutMe.module.css";
import { Emoji } from "../Emoji/Emoji";

import img from "./img/AndreyBlck.png";

export const AboutMe = () => {
  const { t } = useTranslation(["main"]);

  return (
    <main className={`${styles.aboutMe} about-me`}>
      <div className={styles.aboutMeDescription}>
        <h3 className={styles.aboutMeTitle}>
          {t("hi")} <Emoji symbol='👋' />,<br />
          {t("myNameIs")} <br />
          <span className={`active`}>
            {t("andreyBlack")}
          </span>{" "}
          <br />
          {t("buildThings")}
          <br />
        </h3>
      </div>
      <div className={styles.aboutMePhoto}>
        <div className={`${styles.photo} main-photo-bg`}>
          <img
            className='img-fluid'
            src={img}
            alt='Andrey Blck'
          />
        </div>
      </div>
    </main>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./aboutMe.module.css";
import { Emoji } from "../Emoji/Emoji";

import img from "./img/AndreyBlck.png";
import { motion } from "framer-motion";

export const AboutMe = () => {
  const { t } = useTranslation(["main"]);

  return (
    <main className={`${styles.aboutMe} about-me`}>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: .5,
        }}
        className={styles.aboutMeDescription}>
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
      </motion.div>
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
        className={styles.aboutMePhoto}>
        <div className={`${styles.photo} main-photo-bg`}>
          <img
            className='img-fluid'
            src={img}
            alt='Andrey Blck'
          />
        </div>
      </motion.div>
    </main>
  );
};

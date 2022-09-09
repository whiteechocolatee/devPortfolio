import React from "react";

import styles from "./aboutMe.module.css";
import { Emoji } from "../Emoji/Emoji";

import img from "./img/AndreyBlck.png";

export const AboutMe = () => {
  return (
    <main className={styles.aboutMe}>
      <div className={styles.aboutMeDescription}>
        <h3 className={styles.aboutMeTitle}>
          Hi <Emoji symbol='👋' />,<br />
          My name is <br />
          <span className={styles.aboutMeName}>
            Andrey Black
          </span>{" "}
          <br />
          i build things for web
          <br />
        </h3>
      </div>
      <div className={styles.aboutMePhoto}>
        <div className={styles.photo}>
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

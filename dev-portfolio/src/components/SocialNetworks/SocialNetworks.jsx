import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

import styles from "./socialNetworks.module.css";

export const SocialNetworks = () => {
  return (
    <ul className={styles.socialList}>
      <li className={styles.gitLink}>
        <a
          href='https://github.com/whiteechocolatee'
          rel='noreferrer'
          target='_blank'>
          <AiFillGithub />
        </a>
      </li>
      <li className={styles.linkedInLink}>
        <a
          href='https://www.linkedin.com/in/whiiteechocolatee/'
          rel='noreferrer'
          target='_blank'>
          <AiFillLinkedin />
        </a>
      </li>
      <li className={styles.telegramLink}>
        <a
          href='https://t.me/whiiteechocolatee'
          rel='noreferrer'
          target='_blank'>
          <BsTelegram />
        </a>
      </li>
    </ul>
  );
};

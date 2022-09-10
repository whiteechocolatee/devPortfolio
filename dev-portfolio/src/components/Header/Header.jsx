import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>
            andrey <br />
            blck
          </h3>
        </div>
        <nav className={styles.headerNav}>
          <ul className={styles.navList}>
            <li>
              <NavLink to='#'>Home</NavLink>
            </li>
            <li>
              <NavLink to='#'>About</NavLink>
            </li>
            <li>
              <NavLink to='#'>Tech Stack</NavLink>
            </li>
            <li>
              <NavLink to='#'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='#'>Contact</NavLink>
            </li>
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
        </nav>
      </div>
    </header>
  );
};
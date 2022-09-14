import React from "react";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${styles.footer} container-lg`}>
      <div className={styles.contactBar}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div
          className={`${styles.contactsContainer} contact-links`}>
          <div className={styles.contactNumber}>
            <a href='tel:+380500300777'>+380 500 300 777</a>
          </div>
          <div className={styles.contactEmail}>
            <a href='mailto:creatuseandr@icloud.com'>
              creatuseandr@icloud.com
            </a>
          </div>
          <div className={styles.socialNetworks}>
            <SocialNetworks />
          </div>
        </div>
      </div>
      <div className={styles.footerNav}>
        <div className={styles.navContainer}>
          <Navigation />
        </div>
        <div className={styles.aboutProject}>
          <p>
            Built by{" "}
            <span className='active'> Andrey Black</span>{" "}
            with <span className='active'>Love</span> &{" "}
            <span className='active'>Coffee</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

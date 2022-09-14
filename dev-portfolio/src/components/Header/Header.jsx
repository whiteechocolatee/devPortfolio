import React, { useContext } from "react";
import ReactSwitch from "react-switch";

import { ThemeContext } from "../../Context/ThemeContext";

import styles from "./header.module.css";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

export const Header = () => {
  const { theme, themeToggler } = useContext(ThemeContext);

  return (
    <header className={`${styles.header} container-lg`}>
      <div className={styles.headerContainer}>
        <Logo />
        <nav className={styles.headerNav}>
          <Navigation />
          <SocialNetworks />
          <div>
            <ReactSwitch
              checked={theme === "dark"}
              onChange={themeToggler}
            />
          </div>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

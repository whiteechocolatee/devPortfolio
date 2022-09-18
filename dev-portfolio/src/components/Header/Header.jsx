import React, { useContext } from "react";
import ReactSwitch from "react-switch";

import { ThemeContext } from "../../Context/ThemeContext";

import styles from "./header.module.css";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { Sidebar } from "../Sidebar/Sidebar";

export const Header = () => {
  const { theme, themeToggler } = useContext(ThemeContext);

  return (
    <header className={`${styles.header} container-lg`}>
      <div className={styles.headerContainer}>
        <Sidebar
          theme={theme}
          themeToggler={themeToggler}
        />
        <div className={styles.logoMobile}>
          <Logo />
        </div>
        <nav className={styles.headerNav}>
          <Navigation />
          <SocialNetworks />
          <div className={styles.switchers}>
            <div>
              <ReactSwitch
                checked={theme === "light"}
                onChange={themeToggler}
              />
            </div>
            <div>
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

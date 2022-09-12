import React, { useContext, useEffect } from "react";
import ReactSwitch from "react-switch";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { ThemeContext } from "../../Context/ThemeContext";

import styles from "./header.module.css";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";

export const Header = () => {
  const { i18n, t } = useTranslation(["header"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const { theme, themeToggler } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
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
          <select
            className={`${styles.selectLanguage} select`}
            value={localStorage.getItem("i18nextLng")}
            onChange={handleChangeLanguage}>
            <option value='en'>EN</option>
            <option value='ua'>UA</option>
            <option value='ru'>RU</option>
          </select>
        </nav>
      </div>
    </header>
  );
};

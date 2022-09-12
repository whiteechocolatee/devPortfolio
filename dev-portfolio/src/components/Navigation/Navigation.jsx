import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./navigation.module.css";

export const Navigation = () => {
  const { t } = useTranslation(["header"]);

  return (
    <ul className={styles.navList}>
      <li>
        <NavLink to='/'>{t("home")}</NavLink>
      </li>
      <li>
        <NavLink to='/about'>{t("about")}</NavLink>
      </li>
      <li>
        <NavLink to='/technologies'>
          {t("techStack")}
        </NavLink>
      </li>
      <li>
        <NavLink to='/projects'>{t("projects")}</NavLink>
      </li>
      <li>
        <NavLink to='/contacts'>{t("contact")}</NavLink>
      </li>
    </ul>
  );
};

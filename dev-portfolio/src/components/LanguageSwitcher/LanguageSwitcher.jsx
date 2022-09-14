import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import styles from "./switcher.module.css";

export const LanguageSwitcher = () => {
  const [languageIcon, setLanguageIcon] = useState("gb");

  const { i18n } = useTranslation(["header"]);

  useEffect(() => {
    const detectedLanguage =
      localStorage.getItem("i18nextLng");

    if (detectedLanguage?.length > 2) {
      i18next.changeLanguage("en");
    } else if (detectedLanguage.length === 2) {
      if (detectedLanguage === "en") {
        setLanguageIcon("gb");
      } else {
        setLanguageIcon(detectedLanguage);
      }
    }
  }, []);

  const handleChangeLanguage = (e) => {
    if (e.target.value === "en") {
      setLanguageIcon("gb");
    } else {
      setLanguageIcon(e.target.value);
    }

    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={styles.switcherContent}>
      <span class={`fi fi-${languageIcon}`}></span>
      <select
        className={`${styles.selectLanguage} select`}
        value={localStorage.getItem("i18nextLng")}
        onChange={handleChangeLanguage}>
        <option value='en'>EN</option>
        <option value='ua'>UA</option>
        <option value='ru'>RU</option>
      </select>
    </div>
  );
};

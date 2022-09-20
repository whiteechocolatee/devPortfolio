import React from "react";
import { motion, useCycle } from "framer-motion";
import ReactSwitch from "react-switch";
import { useTranslation } from "react-i18next";

import styles from "./sidebar.module.css";
import { MenuToggle } from "./ToggleOpen";
import { MenuItem } from "../Sidebar/MenuItem";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(30px at 40px 40px)`,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Sidebar = ({ themeToggler, theme }) => {
  const [open, setOpen] = useCycle(false, true);
  const { t } = useTranslation(["header"]);

  const items = [
    { id: 1, link: "/", name: t("home") },
    { id: 2, link: "/about", name: t("about") },
    { id: 3, link: "/technologies", name: t("techStack") },
    { id: 4, link: "/projects", name: t("projects") },
    { id: 5, link: "/contacts", name: t("contact") },
  ];

  return (
    <motion.nav
      initial={false}
      animate={open ? "open" : "closed"}
      transition={{ duration: 0.4 }}
      className={styles.sidebarNav}>
      <motion.div
        className={`${styles.background} sidebarbg`}
        variants={variants}
      />
      <motion.ul
        className={styles.sidebarItems}
        variants={variants}>
        {items.map((i) => (
          <MenuItem
            setOpen={() => setOpen()}
            link={i.link}
            name={i.name}
            key={i.id}
          />
        ))}
        <ReactSwitch
          checked={theme === "light"}
          onChange={themeToggler}
        />
        <SocialNetworks />
        <LanguageSwitcher />
      </motion.ul>
      <MenuToggle toggle={() => setOpen()} />
    </motion.nav>
  );
};

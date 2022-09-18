import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./sidebar.module.css";

export const MenuItem = ({ link, name, setOpen }) => {
  return (
    <motion.li
      className={styles.sidebarItem}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <NavLink onClick={() => setOpen()} to={link}>
        {name}
      </NavLink>
    </motion.li>
  );
};

import React from "react";
import styles from "./navigation.module.css";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <ul className={styles.navList}>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/technologies'>Tech Stack</NavLink>
      </li>
      <li>
        <NavLink to='/projects'>Projects</NavLink>
      </li>
      <li>
        <NavLink to='/contacts'>Contact</NavLink>
      </li>
    </ul>
  );
};

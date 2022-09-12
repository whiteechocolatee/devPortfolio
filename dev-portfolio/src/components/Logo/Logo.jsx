import React from "react";
// import styles from "./logo.module.css";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className='active'>
      <Link to='/'>
        <h3>
          andrey <br />
          blck
        </h3>
      </Link>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      className='active'>
      <Link to='/'>
        <h3>
          andrey <br />
          blck
        </h3>
      </Link>
    </motion.div>
  );
};

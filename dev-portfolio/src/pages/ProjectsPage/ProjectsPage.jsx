import React from "react";
import { motion } from "framer-motion";

import { Projects } from "../../components/ProjectList/Projects";
import { containerVariants } from "../pageAnimations";

export const ProjectsPage = () => {
  window.scroll(0, 0);

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='container-lg'>
      <div className='content-wrapper'>
        <Projects />
      </div>
    </motion.div>
  );
};

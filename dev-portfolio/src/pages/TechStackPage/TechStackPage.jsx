import React from "react";
import { motion } from "framer-motion";

import { TechStack } from "../../components/TechStack/TechStack";

import { containerVariants } from "../pageAnimations";

export const TechStackPage = () => {
  window.scroll(0, 0);

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='container-lg'>
      <div className='content-wrapper'>
        <TechStack />
      </div>
    </motion.div>
  );
};

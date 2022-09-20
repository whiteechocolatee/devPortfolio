import React from "react";
import { motion } from "framer-motion";

import { Banner } from "../../components/Banner/Banner";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Projects } from "../../components/ProjectList/Projects";
import { TechStack } from "../../components/TechStack/TechStack";
import { homeContainerVariants } from "../pageAnimations";

export const Main = () => {
  window.scroll(0, 0);

  return (
    <motion.div
      variants={homeContainerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'>
      <div className='container-lg'>
        <AboutMe />
        <TechStack />
      </div>
      <Banner />
      <div className='container-lg'>
        <Projects />
      </div>
    </motion.div>
  );
};

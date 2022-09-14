import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Projects } from "../../components/ProjectList/Projects";
import { TechStack } from "../../components/TechStack/TechStack";
import { homeContainerVariants } from "../pageAnimations";
import styles from "./main.module.css";

export const Main = () => {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
          delay: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [animation, inView]);

  return (
    <motion.div
      variants={homeContainerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='container-lg'>
      <AboutMe />
      <TechStack />
      <div ref={ref}>
        <motion.div
          className={styles.animatedTitle}
          animate={animation}>
          <h1>andrey blck</h1>
          <h1>frontend</h1>
          <h1>developer</h1>
        </motion.div>
      </div>
      <Projects />
    </motion.div>
  );
};

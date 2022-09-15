import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

import styles from "./banner.module.css";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 20,
    stiffness: 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 5],
    {
      clamp: false,
    },
  );
  const x = useTransform(
    baseX,
    (v) => `${wrap(-20, -45, v)}%`,
  );

  const directionFactor = useRef(1);
  const prevT = useRef(0);
  useAnimationFrame((t) => {
    if (!prevT.current) prevT.current = t;

    const timeDelta = t - prevT.current;
    let moveBy =
      directionFactor.current *
      baseVelocity *
      (timeDelta / 1500);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy +=
      directionFactor.current *
      moveBy *
      velocityFactor.get();

    baseX.set(baseX.get() + moveBy);

    prevT.current = t;
  });

  return (
    <div className={styles.parallax}>
      <motion.div
        className={`${styles.scroller} scroller `}
        style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export const Banner = () => {
  return (
    <section
      className={`${styles.parallaxSection} parallax-section`}>
      <ParallaxText baseVelocity={-5}>
        andrey blck andrey blck
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        frontend developer
      </ParallaxText>
    </section>
  );
};

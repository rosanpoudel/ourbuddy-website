"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const PageScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div style={{ scaleX }} className="scroll-progress-bar" />;
};

export default PageScrollAnimation;

// src/components/common/ScrollReveal.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const getVariants = (direction: ScrollRevealProps["direction"]) => {
  const variants = {
    hidden: {},
    visible: { opacity: 1, y: 0, x: 0 },
  };

  switch (direction) {
    case "up":
      variants.hidden = { opacity: 0, y: 40 };
      break;
    case "down":
      variants.hidden = { opacity: 0, y: -40 };
      break;
    case "left":
      variants.hidden = { opacity: 0, x: 40 };
      break;
    case "right":
      variants.hidden = { opacity: 0, x: -40 };
      break;
    default:
      variants.hidden = { opacity: 0, y: 20 };
  }

  return variants;
};

export const ScrollReveal = ({
  children,
  delay = 0.1,
  direction = "up",
  className,
}: ScrollRevealProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
      variants={getVariants(direction)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

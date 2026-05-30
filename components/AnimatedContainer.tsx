"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: boolean;
}

export default function AnimatedContainer({
  children,
  className = "",
  delay = 0,
  staggerChildren = false,
}: AnimatedContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren ? 0.1 : 0,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={staggerChildren ? containerVariants : undefined}
      initial={staggerChildren ? "hidden" : { opacity: 0, y: 20 }}
      whileInView={staggerChildren ? "visible" : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

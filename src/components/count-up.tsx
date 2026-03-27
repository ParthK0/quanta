"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({ end, duration = 2, prefix = "", suffix = "", className = "" }: CountUpProps) {
  const [isInView, setIsInView] = useState(false);
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    return `${prefix}${Math.floor(current)}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(end);
    }
  }, [isInView, end, spring]);

  return (
    <motion.span
      className={className}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, margin: "-50px" }}
    >
      {display}
    </motion.span>
  );
}

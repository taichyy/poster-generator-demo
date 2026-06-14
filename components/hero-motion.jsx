"use client"

import { motion, useReducedMotion } from "motion/react";

const HeroMotion = ({ children }) => {
    const reduce = useReducedMotion();

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: reduce ? 0 : 0.1,
            },
        },
    };

    const item = {
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col"
        >
            {Array.isArray(children)
                ? children.map((child, i) => (
                      <motion.div key={i} variants={item}>
                          {child}
                      </motion.div>
                  ))
                : <motion.div variants={item}>{children}</motion.div>}
        </motion.div>
    );
};

export default HeroMotion;

"use client"

import { motion, useReducedMotion } from "motion/react";

/**
 * Scroll-reveal wrapper using motion/react whileInView.
 * Used for section headers and bento tiles.
 * Isolated client leaf component — Section 3.A INTERACTIVITY ISOLATION.
 */
const RevealStagger = ({ children, delay = 0, className = "" }) => {
    const reduce = useReducedMotion();

    return (
        <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.65,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default RevealStagger;

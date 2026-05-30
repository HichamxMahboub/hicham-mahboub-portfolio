/**
 * Shared Framer Motion variants for consistent animations across the site
 */
import { Variants } from "framer-motion";

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 },
    },
};

export const slideUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -24 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 },
    },
};

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 },
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6 },
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export const staggerItemFast: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
    },
};

export const hoverScale = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
};

export const hoverLift = {
    whileHover: { y: -8 },
};

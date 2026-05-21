import type { Variants } from "framer-motion";

// Fade up — used for most text and card reveals
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Stagger container — wraps lists of cards/items
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Fade in — pure opacity, no movement
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Scale in — subtle, for images
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Slide in from left — for hero text
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Float up and down — for the orb
export const orbMotion: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.98,
  },

  visible: {
    opacity: [0.75, 1, 0.85, 1, 0.8],
    y: [0, -8, 3, -6, 0],
    scale: [1, 1.02, 0.99, 1.01, 1],
    rotate: [-0.5, 0.5, -0.3, 0.3, 0],

    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",

      opacity: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};
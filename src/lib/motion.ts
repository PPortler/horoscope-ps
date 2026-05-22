import type { Variants } from "framer-motion";

// Fade up — used for most text and card reveals
export const fadeUp = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 32,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

// Fade in — pure opacity, no movement
export const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

// Scale in
export const scaleIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: 1.04,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      delay,
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

// Slide in from left — for hero text
export const slideInLeft = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      delay,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

// Float up and down — for the orb
export const orbMotion = (delay = 0): Variants => ({
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
      delay,
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
});

// Magic sparkle — rotating and floating
export const magicMotion = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.95,
  },

  visible: {
    opacity: .5,
    scale: 1,

    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
animate: {
  rotate: 360,
  y: [0, -6, 0],
  scale: [1, 1.05, 1],
  opacity: [0.2, 0.5, 0.2, 0.1, 0, 0.1, 0.2, 0.5, 0.3],

  transition: {
    rotate: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
    scale: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
    opacity: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.1, 0.3, 0.45, 0.5, 0.55, 0.7, 0.9, 1],
    },
  },
},
});
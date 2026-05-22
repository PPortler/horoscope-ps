"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/motion";

type CandleProps = {
  className?: string;
};

export default function Candle({
  className = "",
}: CandleProps) {
  return (
    <motion.div
      variants={scaleIn(.5)}
      initial="hidden"
      animate="visible"
      className={`absolute ${className} w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]`}
    >

      {/* Candle Image */}
      <Image
        src="/images/candle.png"
        alt="candle"
        fill
        className="object-contain"
      />

      {/* Flame Left */}
      <motion.div
        className="absolute bottom-[150px] left-[65px] lg:bottom-[222px] lg:left-[100px] w-2 h-6 lg:w-4 lg:h-8
         rounded-full blur-sm transform-gpu will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 40% 30%, #fff7c2 0%, #ffb84d 40%, #ff6a00 75%, rgba(255,0,0,0.25) 100%)",
        }}
        variants={scaleIn(.9)}
        animate={{
          scale: [1, 1.06, 0.98, 1],
          opacity: [0.7, 1, 0.8, 1],
          y: [0, -1, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Flame Center */}
      <motion.div
        className="absolute bottom-[160px] left-[101px] lg:bottom-[240px] lg:left-[153px] -translate-x-1/2 w-2 h-6 lg:w-4 lg:h-8 rounded-full blur-sm transform-gpu will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 40% 30%, #fff6b0 0%, #ffb347 35%, #ff6a00 70%, rgba(255,0,0,0.3) 100%)",
        }}
        animate={{
          scale: [1, 1.06, 0.98, 1],
          opacity: [0.8, 1, 0.7, 1],
          y: [0, -2, 0],
        }}
        variants={scaleIn(1.3)}
        transition={{
          duration: 1.1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* Flame Right */}
      <motion.div
        className="absolute bottom-[150px] right-[60px] lg:bottom-[222px] lg:right-[95px] w-2 h-6 lg:w-4 lg:h-8 rounded-full blur-sm transform-gpu will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 40% 30%, #fff7c2 0%, #ffb84d 40%, #ff6a00 75%, rgba(255,0,0,0.25) 100%)",
        }}
        animate={{
          scale: [1, 1.06, 0.98, 1],
          opacity: [0.7, 1, 0.8, 1],
          y: [0, -1, 0],
        }}
        variants={scaleIn(1.1)}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </motion.div>
  );
}
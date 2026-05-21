"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { orbMotion } from "@/lib/motion";

type Props = {
  className?: string;
};

export default function MagicOrbStand({ className = "" }: Props) {
  return (
    <div className={`absolute ${className} w-[1000px]`}>

      {/* Stand */}
      <motion.div className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[300px] bottom-[-80px] lg:bottom-[-100px] lg:w-[500px] lg:h-[500px]">
        <Image
          src="/images/stand.png"
          alt="stand"
          fill
          className="object-contain "
          priority
        />
      </motion.div>

      {/* Orb */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] w-[300px] h-[300px] lg:bottom-[20px] lg:w-[450px] lg:h-[450px]"
        variants={orbMotion}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/orb-item.png"
          alt="orb"
          fill
          className="object-contain"
          priority
        />

        {/* Ring 1 */}
        <motion.div
          className="absolute inset-0 rounded-full border-purple-300/60"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Ring 2 */}
        <motion.div
          className="absolute inset-0 rounded-full border-pink-300/50 scale-110"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        {/* Glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-purple-500/10 blur-2xl scale-125"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Magic */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[120px] h-[120px] bottom-[90px] lg:bottom-[120px] lg:w-[200px] lg:h-[200px] "
          animate={{
            rotate: 360,
            y: [0, -6, 0],
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.85],
          }}
          transition={{
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
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src="/images/magic.png"
            alt="magic"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>


    </div>
  );
}
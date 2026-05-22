"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, orbMotion, scaleIn, magicMotion, fadeIn } from "@/lib/motion";

type Props = {
  className?: string;
};

export default function MagicOrbStand({ className = "" }: Props) {
  return (
    <div className={`absolute ${className} `}>

      {/* Stand */}
      <motion.div
        variants={fadeUp(.7)}
        initial="hidden"
        animate="visible"
        className="
          absolute 
          left-1/2 
          -translate-x-1/2 
          w-[300px] 
          h-[300px] 
          bottom-[-80px] 
          lg:bottom-[-100px] 
          lg:w-[500px] 
          lg:h-[500px] 
          transform-gpu 
          will-change-transform
        "
      >
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
        variants={scaleIn(.9)}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={orbMotion()}
          initial="hidden"
          animate="visible"
          className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] w-[300px] h-[300px] lg:bottom-[20px] lg:w-[450px] lg:h-[450px]"
        >
          <Image
            src="/images/orb-item.png"
            alt="orb"
            fill
            className="object-contain"
            priority
          />

          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-purple-500/40 blur-xl lg:blur-3xl scale-30"
            variants={scaleIn(1)}
          />
          <motion.div
            className="hidden lg:block absolute inset-0 rounded-full bg-purple-500/30 blur-3xl scale-50"
            variants={scaleIn(1.3)}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-purple-500/10 blur-xl lg:blur-3xl scale-150"
            variants={scaleIn(1.5)}
          />

          {/* Magic */}
          <motion.div
            variants={magicMotion()}
            initial="hidden"
            animate={["visible", "animate"]}
            className="absolute left-1/2 -translate-x-1/2 w-[120px] h-[120px] bottom-[90px] lg:bottom-[120px] lg:w-[200px] lg:h-[200px] "
          >
            <Image
              src="/images/magic.png"
              alt="magic"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>

      </motion.div>

    </div>
  );
}
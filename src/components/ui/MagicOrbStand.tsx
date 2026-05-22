"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, orbMotion, scaleIn, magicMotion, fadeIn } from "@/lib/motion";

type Props = {
  className?: string;
};

export default function MagicOrbStand({ className = "" }: Props) {
  return (
    <div className={`absolute ${className}`}>

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
        "
      >

        {/* Shadow */}
        <motion.div
          variants={fadeIn(.8)}
          className="
            absolute
            bottom-[55px]
            lg:bottom-[100px]
            left-1/2
            -translate-x-1/2
            w-[180px]
            h-[50px]
            lg:w-[260px]
            lg:h-[100px]
            bg-black/90
            blur-lg
            lg:blur-[28px]
            rounded-full
            z-10
          "
        />

        {/* Orb light spill */}
        <motion.div
          className="
            absolute
            inset-0
            bg-purple-400/10
            lg:bg-purple-400/20
            blur-xl
            lg:blur-3xl
            rounded-full
            mix-blend-screen
            scale-[0.7]
            pointer-events-none
          "
          variants={fadeIn(1.3)}
        />

        <Image
          src="/images/stand.png"
          alt="stand"
          fill
          priority
          className="
            object-contain
            brightness-95
            contrast-110
            saturate-125
            drop-shadow-[0_0_30px_rgba(168,85,247,0.15)]
          "
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

          {/* Shadow */}
          <motion.div
            variants={fadeIn(1)}
            className="
            absolute
            bottom-[81px]
            lg:bottom-[120px]
            left-1/2
            -translate-x-1/2
            w-[90px]
            h-[2px]
            lg:w-[160px]
            lg:h-[7px]
            bg-black/90
            blur-[2px]
            lg:blur-[4px]
            rounded-full
            z-[-1]
          "
          />

          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-purple-500/40 blur-xl lg:blur-3xl scale-30"
            variants={scaleIn(1)}
          />
          <motion.div
            className="hidden lg:block absolute inset-0 rounded-full bg-purple-500/30 blur-3xl scale-50"
            variants={scaleIn(1.5)}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-purple-500/10 lg:bg-purple-500/20 blur-xl lg:blur-3xl scale-150 "
            variants={scaleIn(2)}
          />

          {/* Magic */}
          <motion.div
            variants={magicMotion()}
            initial="hidden"
            animate={["visible", "animate"]}
            className="absolute left-1/2 -translate-x-1/2 w-[120px] h-[120px] bottom-[90px] lg:bottom-[120px] lg:w-[200px] lg:h-[200px]"
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
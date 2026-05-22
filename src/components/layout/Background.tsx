"use client";

import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion"
import Image from "next/image";
import Candle from "../ui/Candle";
import MagicOrbStand from "../ui/MagicOrbStand";

export function Background() {

  return (
    <div className="fixed w-full h-screen overflow-hidden z-[-1]">
      {/* Witch room background */}
      <motion.div
        className="absolute inset-0"
      >
        <Image
          src="/images/bg-witch-room.png"
          alt="witch room background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <motion.div
        variants={fadeUp(0.2)}
        initial="hidden"
        animate="visible"
        className="absolute bottom-[-300px] lg:bottom-[-200px] left-1/2 -translate-x-1/2"
      >
        <div className="relative w-[600px] h-[700px] lg:w-[1200px] lg:h-[700px]">
          {/* Table (base layer) */}
          <Image
            src="/images/table.png"
            alt="table"
            fill
            className="object-contain"
          />
          {/* Magic Orb Stand */}
          <MagicOrbStand className="absolute bottom-[60%] left-1/2 -translate-x-1/2 z-10" />

          {/* Left Candle */}
          <Candle className="absolute bottom-[60%] left-[12%] lg:bottom-[65%] lg:left-[20%]" />

          {/* Right Candle */}
          <Candle className="absolute bottom-[60%] right-[12%] lg:bottom-[65%] lg:right-[20%]" />
        </div>
      </motion.div>

      {/* Gradient overlay */}
      {/* Top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/0 to-transparent" />
      {/* Bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-800/40 via-red-800/0 to-transparent" />
    </div>
  );
}

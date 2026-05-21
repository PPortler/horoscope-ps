"use client";

import { fadeIn } from "@/lib/motion";
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
        variants={fadeIn}
        initial="hidden"
        animate="visible"
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

      <div className="absolute bottom-[-300px] lg:bottom-[-200px] left-1/2 -translate-x-1/2">
        <div className="relative w-[600px] h-[700px] lg:w-[1200px] lg:h-[700px]">
          {/* Table (base layer) */}
          <Image
            src="/images/table.png"
            alt="table"
            fill
            className="object-contain"
          />

          {/* MAGIC ORB (relative to table) */}
          <MagicOrbStand className="absolute bottom-[60%] left-1/2 -translate-x-1/2" />

          {/* LEFT CANDLE */}
          <Candle className="absolute bottom-[60%] left-[12%] lg:bottom-[65%] lg:left-[20%]" />

          {/* RIGHT CANDLE */}
          <Candle className="absolute bottom-[60%] right-[12%] lg:bottom-[65%] lg:right-[20%]" />
        </div>
      </div>

      {/* Gradient overlay */}
      {/* Top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/0 to-transparent" />
      {/* Bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-800/40 via-red-800/0 to-transparent" />
    </div>
  );
}

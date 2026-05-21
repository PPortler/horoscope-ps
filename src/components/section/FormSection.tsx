"use client"

import { fadeUp, scaleIn } from "@/lib/motion";
import { motion } from "framer-motion";

function FormSection() {
  return (
    <section id="form-section" className="mx-auto max-w-[600px] lg:w-full pb-10 lg:pb-0">

      {/* Input */}
      <motion.div
        variants={fadeUp(1.7)}
        initial="hidden"
        animate="visible"
        className="backdrop-blur-xl bg-black/70 border border-[#a88866] rounded-2xl px-6 py-4 shadow"
      >
        <textarea
          style={{ resize: "none" }}
          className=" h-[120px] bg-transparent outline-none text-[#e6d3b3] placeholder:text-stone-500 w-full"
          placeholder="พิมพ์คำถามของคุณ (ไม่บังคับ)"
        />
      </motion.div>

      {/* Tag */}
      <motion.div
        variants={fadeUp(1.9)}
        initial="hidden"
        animate="visible"
        className="mt-3 flex flex-wrap gap-2"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.button
            key={i}
            className="px-3 py-1 bg-[#1d1211] border border-[#a88866] rounded-lg text-stone-400 text-xs hover:text-stone-300 transition cursor-pointer"
          >
            ข้อความ
          </motion.button>
        ))}
      </motion.div>

      {/* Button */}
      <div className="mt-5 flex gap-3 justify-center text-sm lg:text-md">
        <motion.button
          variants={scaleIn(2.1)}
          initial="hidden"
          animate="visible"
          className="w-40 px-4 py-2 bg-[#526d2d] text-stone-100 font-medium rounded-3xl shadow border-4 border-[#ccb297] cursor-pointer hover:opacity-95 transition"
        >
          เริ่มเลือกไพ่
        </motion.button>
        <motion.button
          variants={scaleIn(2.3)}
          initial="hidden"
          animate="visible"
          className="w-40 px-4 py-2 bg-[#a88b61] text-stone-100 font-medium rounded-3xl shadow border-4 border-[#ccb297] cursor-pointer hover:opacity-95 transition"
        >
          ข้าม
        </motion.button>
      </div>
    </section>
  );
}

export default FormSection;
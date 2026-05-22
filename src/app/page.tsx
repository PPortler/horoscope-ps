"use client";

import { useState } from "react";
import { Background } from "@/components/layout/Background";
import FormSection from "@/components/section/FormSection";
import HeroSection from "@/components/section/HeroSection";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showContent, setShowContent] = useState(true);

  return (
    <>
      <Background />

      {/* Toggle button */}
      <button
        onClick={() => setShowContent((prev) => !prev)}
        className="
          fixed bottom-6 right-6 z-50
          flex items-center gap-2
          px-4 py-2 rounded-full
          bg-white/10 hover:bg-white/20
          backdrop-blur-md
          border border-white/20
          text-white text-sm font-medium
          transition-all duration-300
          cursor-pointer
        "
      >
        {showContent ? (
          <>
            <span>Hide UI</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
          </>
        ) : (
          <>
            <span>Show UI</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </>
        )}
      </button>

      {/* Main content */}
      <AnimatePresence>
        {showContent && (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative z-10 h-screen flex flex-col justify-between gap-10 pt-10 lg:p-20 px-5"
          >
            <HeroSection />
            <FormSection />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
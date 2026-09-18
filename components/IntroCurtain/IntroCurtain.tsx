"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./IntroCurtain.css";

export default function IntroCurtain() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem("aj-technologies-intro", "true");
    }, 3900);

    return () => window.clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <motion.div
      className="intro-curtain"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="curtain curtain-left"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          delay: 2.25,
          duration: 1.45,
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      <motion.div
        className="curtain curtain-right"
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{
          delay: 2.25,
          duration: 1.45,
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      <motion.div
        className="intro-center"
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="intro-logo-glow" />

        <motion.img
          src="/logo/aj-technologies-logo.png"
          alt="AJ Technology - AI Journey"
          className="intro-logo"
          initial={{ opacity: 0, scale: 0.8, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.div
          className="intro-line"
          initial={{ width: 0 }}
          animate={{ width: 170 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: "easeOut",
          }}
        />

        <motion.p
          className="intro-tagline"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 1.05,
          }}
        >
          AI JOURNEY
        </motion.p>
      </motion.div>

      <div className="intro-particles">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <motion.div
        className="intro-loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <div className="intro-loader-track">
          <motion.div
            className="intro-loader-progress"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.9,
              ease: "linear",
            }}
          />
        </div>

        <span>ENTERING AI JOURNEY</span>
      </motion.div>
    </motion.div>
  );
}
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/components/ActiveSection";
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaReddit  } from "react-icons/fa";
import { MdOutlineCloudDownload } from "react-icons/md";
import { FaXTwitter , FaGithub  } from "react-icons/fa6";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mt-16 mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src = "/dp.jpg"
              alt='eidraffin'
              width={192}
              height={192}
              quality="95"
              priority={true}
              className="mb-10 h-60 w-60 rounded-full object-cover border-[0.15rem] border-zinc-950 shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-justify"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
        Hello there! I&#39;m Eidraffin, a third-year Computer Science student at <a className="text-blue-500 opacity-60" href="https://www.bracu.ac.bd/" id="university">Brac University</a>, currently focusing on Backend Development and Machine Learning.
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-zinc-900 text-white/60 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition"
          href="https://drive.google.com/file/d/1EoaLXEDOaViMRXZdBMIPMJ6e9wcAVUZi/view?usp=drive_link"
          download
        >
          Resume{" "}
          <MdOutlineCloudDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack bg-zinc-900 text-white/60"
          href="https://www.linkedin.com/in/eidraffin/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack bg-zinc-900 text-white/60"
          href="https://www.github.com/eidraffin/"
          target="_blank"
        >
          <FaGithub  />
        </a>
        <a
          className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack bg-zinc-900 text-white/60"
          href="https://x.com/eidraffin"
          target="_blank"
        >
          <FaXTwitter  /> 
        </a>
        <a
          className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack bg-zinc-900 text-white/60"
          href="https://www.reddit.com/user/eidraffin/"
          target="_blank"
        >
          <FaReddit  />
        </a>
        <a
          className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack bg-zinc-900 text-white/60"
          href="https://www.facebook.com/eidraffin/"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
        <a
          className="p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack bg-zinc-900 text-white/60"
          href="https://www.instagram.com/eidraffin"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </section>
  );
};
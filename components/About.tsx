"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>ABOUT ME</SectionHeading>
      <p className="mb-3 text-xl text-justify">
        <span>
          I&#39;m driven to stay at the forefront of technology. My key interests lie in Operating Systems and Cybersecurity. Currently, my areas of focus in development include <strong className="text-[1.3rem] opacity-60">Backend Development</strong> and <strong className="text-[1.3rem] opacity-60">Machine Learning</strong>. I&#39;m proficient in programming languages such as <strong className="text-[1.3rem] opacity-60">Python</strong>, <strong className="text-[1.3rem] opacity-60">JavaScript</strong>, and <strong className="text-[1.3rem] opacity-60">C</strong>. Additionally, I enjoy applying my skills to web development projects using <strong className="text-[1.3rem] opacity-60">Next.js</strong> and <strong className="text-[1.3rem] opacity-60">Django</strong> whenever possible. My goal is to blend my technical skills and curiosity to create impactful solutions in the digital world.
        </span> 
        <br /><br />
        <span>
          Beyond my degree, I have a keen interest in <strong className="text-[1.3rem] opacity-60">History</strong> and <strong className="text-[1.3rem] opacity-60"> Philosophy</strong>, which enriches my understanding of the world and informs my approach to technology and problem-solving. I believe that examining historical events and philosophical concepts allows me to think critically and innovatively. This diverse perspective helps me tackle challenges with a well-rounded approach.
        </span>
      </p>
    </motion.section>
  );
};
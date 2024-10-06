"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPython, 
  SiDjango, 
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiC,
  SiCplusplus 
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiFirebaseFill } from "react-icons/ri";

export const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="h-6 w-6" /> },
  { name: "CSS", icon: <FaCss3Alt className="h-6 w-6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-6 w-6" /> },
  { name: "JavaScript", icon: <SiJavascript className="h-6 w-6" /> },
  { name: "TypeScript", icon: <SiTypescript className="h-6 w-6" /> },
  { name: "React", icon: <SiReact className="h-6 w-6" /> },
  { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6" /> },
  { name: "Node.js", icon: <SiNodedotjs className="h-6 w-6" /> },
  { name: "Python", icon: <SiPython className="h-6 w-6" /> },
  { name: "Django", icon: <SiDjango className="h-6 w-6" /> },
  { name: "C", icon: <SiC className="h-6 w-6" /> },
  { name: "C++", icon: <SiCplusplus className="h-6 w-6" /> },
  { name: "Git", icon: <FaGitAlt className="h-6 w-6" /> },
  { name: "MySQL", icon: <GrMysql className="h-6 w-6" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6" /> },
  { name: "MongoDB", icon: <SiMongodb className="h-6 w-6" /> },
  { name: "Prisma", icon: <SiPrisma className="h-6 w-6" /> },
  { name: "Firebase", icon: <RiFirebaseFill  className="h-6 w-6" /> },
] as const;

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 px-4"
    >
      <SectionHeading>SKILLS</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 ">
        {skillsData.map((skill, index) => (
          <motion.li
            className="cursor-pointer rounded-xl justify-center items-center shadow-lg px-5 py-4 hover:bg-zinc-900 transition-colors duration-300 bg-zinc-950 border-gray-700 text-gray-200 hover:scale-110"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="flex justify-center items-center space-x-2 opacity-80 focus:scale-110 hover:scale-110 active:scale-105 transition">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
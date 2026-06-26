"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const careerData = [
  {
    year: "07/2024 - 03/2025",
    title: "Frontend Developer",
    company: "Scala by Meteranet",
    companyProfile: "https://scala.co.id",
    logo: "/Images/scala-logo.png",
    description:
      "Developed web applications and collaborated with cross-functional teams.",
  },
  {
    year: "07/2024 - 03/2025",
    title: "Frontend Developer",
    company: "PT Arna Teknologi Peduli",
    companyProfile: "https://arnatech.id/",
    logo: "/Images/arnatech_logo.jpeg",
    description:
      "Developed web applications and collaborated with cross-functional teams.",
  },
  {
    year: " 02/2024 - 07/2024",
    title: "Frontend Developer",
    company: "PT. Elang System Solusi Indonesia",
    companyProfile: "https://www.ezzi.co.id/",
    logo: "/Images/ezzi-logo.jpeg",
    description:
      "Assisted in building scalable front-end features and maintained codebases.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const CareerCard: React.FC = () => {
  return (
    <motion.div
      className="grid grid-cols-1 xl:grid-cols-2 gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {careerData.map((item, index) => (
        <motion.div
          key={index}
          className="glass-card rounded-2xl p-5 md:p-6 flex gap-5 hover:border-primary/30 transition-all duration-300"
          variants={itemVariants}
        >
          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container/80 flex items-center justify-center p-2">
            <Image
              src={item.logo}
              alt={`${item.company} logo`}
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-1.5 min-w-0">
            <h3 className="font-geist text-headline-sm-mobile text-on-surface">
              {item.title}
            </h3>
            <Link
              href={item.companyProfile}
              target="_blank"
              rel="noreferrer"
              className="font-geist text-label-caps text-primary hover:text-primary/80 transition-colors duration-200"
            >
              {item.company}
            </Link>
            <span className="font-geist text-mono text-on-surface-variant/70">
              {item.year.trim()}
            </span>
            <p className="font-inter text-body-sm text-on-surface-variant mt-1">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CareerCard;

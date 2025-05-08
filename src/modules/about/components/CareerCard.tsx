import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const careerData = [
  {
    year: '09/2024 - 03/2025',
    title: 'Frontend Developer',
    company: 'PT Arna Teknologi Peduli',
    companyProfile: 'https://arnatech.id/',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQHeFmwmc1Do8A/company-logo_200_200/company-logo_200_200/0/1705456038957/arnatech_logo?e=1747872000&v=beta&t=DSSdLEIwuG9swYJh-0he4lRveayL1lrsERo6Qaukn94',
    description:
      'Developed web applications and collaborated with cross-functional teams.',
  },
  {
    year: '07/2024 - 08/2024',
    title: 'Frontend Developer(Freelance)',
    company: 'PT Arna Teknologi Peduli',
    companyProfile: 'https://arnatech.id/',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQHeFmwmc1Do8A/company-logo_200_200/company-logo_200_200/0/1705456038957/arnatech_logo?e=1747872000&v=beta&t=DSSdLEIwuG9swYJh-0he4lRveayL1lrsERo6Qaukn94',
    description:
      'Developed web applications and collaborated with cross-functional teams.',
  },
  {
    year: ' 02/2024 - 07/2024',
    title: 'Frontend Developer',
    company: 'PT. Elang System Solusi Indonesia',
    companyProfile: 'https://www.ezzi.co.id/',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQFK3vioSVnZWg/company-logo_200_200/company-logo_200_200/0/1707203909195?e=1747872000&v=beta&t=bKZsDnn_ZL96j0MA90MKMlF_8kizZ6F1VurPJpVTTDw',
    description:
      'Assisted in building scalable front-end features and maintained codebases.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const CareerCard: React.FC = () => {
  return (
    <div className="w-full">
      <motion.div
        className="gap-6 grid xl:grid-cols-2 justify-items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {careerData.map((item, index) => (
          <motion.div
            key={index}
            className="w-full flex gap-6 p-4 bg-gray-100 dark:bg-primary shadow-lg rounded-md"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={item.logo}
              alt="Logo Company"
              width={70}
              height={30}
              className="object-contain"
            />
            <div className="">
              <h3 className="text-xl dark:text-neutral-200 font-semibold">
                {item.title}
              </h3>
              <Link
                href={item.companyProfile}
                target="_blink"
                className="text-sm text-blue-500 capitalize"
              >
                {item.company}
              </Link>
              <span className="block font-medium mb-2">{item.year}</span>
              <p className="">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CareerCard;

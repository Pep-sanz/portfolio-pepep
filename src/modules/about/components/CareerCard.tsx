import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const careerData = [
  {
    year: '2020 - 2024',
    title: 'Software Engineer',
    company: 'Tech Solutions',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',
    description:
      'Developed web applications and collaborated with cross-functional teams.',
  },
  {
    year: '2018 - 2020',
    title: 'Junior Developer',
    company: 'Innovative Systems',
    logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png',
    description:
      'Assisted in building scalable front-end features and maintained codebases.',
  },
  {
    year: '2015 - 2018',
    title: 'Intern Developer',
    company: 'Startup Inc.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',
    description:
      'Worked on small projects and gained hands-on experience in development.',
  },
  {
    year: '2015 - 2018',
    title: 'Intern Developer',
    company: 'Startup Inc.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',
    description:
      'Worked on small projects and gained hands-on experience in development.',
  },
  {
    year: '2015 - 2018',
    title: 'Intern Developer',
    company: 'Startup Inc.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',
    description:
      'Worked on small projects and gained hands-on experience in development.',
  },
  {
    year: '2015 - 2018',
    title: 'Intern Developer',
    company: 'Startup Inc.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png',
    description:
      'Worked on small projects and gained hands-on experience in development.',
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
        className="gap-6 grid md:grid-cols-2 justify-items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {careerData.map((item, index) => (
          <motion.div
            key={index}
            className="w-full flex gap-6 p-4 border-l-4 border-blue-500 bg-gray-100 shadow-lg rounded-md"
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
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.company}</p>
              <span className="block text-blue-600 font-medium mb-2">
                {item.year}
              </span>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CareerCard;

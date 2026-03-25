import React from 'react'
import { company_logos } from '../assets/assets';
import { Motion } from "motion/react";

const TrustedBy = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80"
    >
      <Motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-semibold"
      >
        Trusted by Leading Companies
      </Motion.h3>

      <Motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-10 m-4"
      >
        {company_logos.map((logo, index) => (
          <Motion.img
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            key={index}
            src={logo}
            alt="company logo"
            loading="lazy"
            className="w-25 max-h-10 sm:max-h-14 dark:drop-shadow-xl"
          />
        ))}
      </Motion.div>
    </Motion.div>
  );
}

export default TrustedBy

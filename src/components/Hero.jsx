import React from 'react'
import assets from '../assets/assets'
import { Motion } from 'motion/react';


const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full"
      >
        <img
          className="w-8 rounded-full border border-gray-300 overflow-hidden"
          src={assets.profile1}
          alt="group-profile"
          loading="lazy"
        />
        <img
          className="w-8 rounded-full -ml-3.5 border border-gray-300 overflow-hidden"
          src={assets.profile7}
          alt="group-profile"
          loading="lazy"
        />
        <img
          className="w-8 rounded-full -ml-3.5 border border-gray-300 overflow-hidden"
          src={assets.profile2}
          alt="group-profile"
          loading="lazy"
        />
        <img
          className="w-8 rounded-full -ml-3.5 border border-gray-300 overflow-hidden"
          src={assets.profile12}
          alt="group-profile"
          loading="lazy"
        />

        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </Motion.div>

      <Motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl"
      >
        Turning imagination into{" "}
        <span className="bg-linear-to-r from-primary to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </Motion.h1>

      <Motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </Motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src={assets.hero}
          alt="hero banner"
          loading="lazy"
          className="w-full max-w-6xl rounded-3xl"
        />
      </motion.div>
    </div>
  );
}

export default Hero

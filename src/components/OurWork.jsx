import React from 'react'
import Title from './Title'
import assets from '../assets/assets';
import { Motion } from "motion/react";

const OurWork = () => {

    const workData = [
      {
        title: "Dashboard Management",
        description:
          "We provide professional dashboard management to keep your data organized, updated, and easy to understand, helping you track performance, make better decisions, and improve business efficiency.",
        image: assets.dashboard_management,
      },
      {
        title: "Mobile App Marketing",
        description:
          "We help your mobile app grow fast by increasing downloads, improving visibility on app stores, and reaching the right users through smart advertising, ASO, and social media promotion.",
        image: assets.mobile_app_marketing,
      },
      {
        title: "Fitness App Promotion",
        description:
          "We promote your fitness app to the right audience through targeted marketing, social media campaigns, and app store optimization to increase installs, engagement, and user retention.",
        image: assets.fitness_app_promotion,
      },
    ];
  

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img
              className="w-full rounded-xl"
              src={work.image}
              alt="work image"
              loading="lazy"
            />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </Motion.div>
  );
}

export default OurWork

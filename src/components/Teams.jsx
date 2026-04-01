import React from 'react'
import Title from './Title'
import assets from '../assets/assets';
import { motion } from "framer-motion";

const Teams = () => {

    const teamData = [
      {
        name: "Jessica Morgan",
        title: "Ads Manager",
        profile: assets.profile9,
      },
      {
        name: "James Walker",
        title: "CEO & Founder",
        profile: assets.profile11,
      },
      {
        name: "Paul William",
        title: "Marketing & Sales",
        profile: assets.profile8,
      },
      {
        name: "Ashley Joseph",
        title: "Vice President",
        profile: assets.profile10,
      },
      {
        name: "John Johnson",
        title: "Content Marketer",
        profile: assets.profile5,
      },
      {
        name: "Maria Luna",
        title: "Performance Manager",
        profile: assets.profile6,
      },
      {
        name: "William Brown",
        title: "Content Writer",
        profile: assets.profile4,
      },
      {
        name: "Ryan Parker",
        title: "Senior Writer",
        profile: assets.profile3,
      },
    ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white"
    >
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brands success."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((team, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400"
          >
            <img
              className="w-12 h-12 rounded-full"
              src={team.profile}
              alt="profile"
              loading="lazy"
            />
            <div className="flex-1">
              <h3 className="font-bold text-sm">{team.name}</h3>
              <p className="text-xs opacity-60">{team.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Teams
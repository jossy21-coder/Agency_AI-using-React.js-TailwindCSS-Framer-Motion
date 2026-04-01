import React from 'react'
import Title from './Title'
import ServiceCard from './ServiceCard';
import assets from '../assets/assets';
import { motion } from "framer-motion";

const Services = () => {
    
const servicesData = [
  {
    title: "Content Marketing",
    description:
      "We create strategic content that builds brand trust, attracts targeted audiences, and drives consistent engagement and business growth.",
    icon: assets.content_marketing,
  },
  {
    title: "Advertising",
    description:
      "We design and manage high-impact ad campaigns that boost visibility, generate quality leads, and maximize your return on investment.",
    icon: assets.advertising,
  },
  {
    title: "Content Writing",
    description:
      "We deliver clear, persuasive, and SEO-friendly content that communicates your brand message and converts visitors into loyal customers.",
    icon: assets.content_writing,
  },
  {
    title: "Social Media",
    description:
      "We manage and grow your social presence with engaging posts, audience interaction, and smart strategies that strengthen brand awareness.",
    icon: assets.social_media,
  },
]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default Services

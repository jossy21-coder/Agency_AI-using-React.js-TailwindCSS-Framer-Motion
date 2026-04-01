import React, { useRef } from 'react'
import { useState } from 'react'
import { motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
    
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false);

    const divRef = useRef(null)
    const handleMouseMove = (e)=>{
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top})
    }
    
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative overflow-hidden h-full flex flex-col justify-between w-full rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 w-40 h-40 sm:w-60 sm:h-60 absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? "opacity-70" : "opacity-0"}`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 flex-1 bg-white dark:bg-gray-900 rounded-xl relative z-10 hover:p-4 hover:m-0.5 transition-all">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
          <img
            className="bg-white dark:bg-gray-900 rounded-full w-14 h-14 object-cover"
            src={service.icon}
            alt="icon"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold">{service.title}</h3>
          <p className="text-sm mt-2">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard

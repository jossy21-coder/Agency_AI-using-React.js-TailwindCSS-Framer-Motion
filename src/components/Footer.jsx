import React from 'react'
import assets from '../assets/assets';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Motion } from "motion/react";

const Footer = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* footer top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <Motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            className="w-16 sm:w-20 rounded"
            src={assets.logo}
            alt="logo"
            loading="lazy"
          />
          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="flex gap-8">
            <li>
              <a className="hover:text-primary" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#our-work">
                Our Work
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </Motion.div>
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button
              type="submit"
              className="bg-primary text-white rounded px-6 cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </Motion.div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* footer bottom */}
      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p>Copyright 2026 &copy; Yosef - All Right Reserved.</p>
        <div className="flex items-center justify-between gap-4">
          <a href="facebook.com/">
            <FiFacebook className="w-5 h-5 hover:-translate-y-1.5 text-primary" />
          </a>
          <a href="twitter.com/">
            <FiTwitter className="w-5 h-5 hover:-translate-y-1.5 text-primary" />
          </a>
          <a href="instagram.com/">
            <FiInstagram className="w-5 h-5 hover:-translate-y-1.5 text-primary" />
          </a>
          <a href="linkedin.com/">
            <FiLinkedin className="w-5 h-5 hover:-translate-y-1.5 text-primary" />
          </a>
        </div>
      </Motion.div>
    </Motion.div>
  );
}

export default Footer

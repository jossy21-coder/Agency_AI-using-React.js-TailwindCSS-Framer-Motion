import React from 'react'
import Title from './Title'
import { FiArrowRight, FiInbox, FiMail, FiMessageCircle, FiMessageSquare, FiUser } from 'react-icons/fi'
import { FaCircleUser } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import { Motion } from "motion/react";


const ContactUs = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "78e65730-af1e-4976-9246-c7f920e4b458");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
      
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Please try again!");
    }

  };

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <FaCircleUser className="mt-3.5" />
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              required
              className="w-full p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <FiMail className="mt-3.5" />
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              required
              className="w-full p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter Your Message"
            required
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
          />
        </div>

        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Submit <FiArrowRight className="mt-0.5 w-4 h-4" />
        </button>
      </motion.form>
    </Motion.div>
  );
}

export default ContactUs

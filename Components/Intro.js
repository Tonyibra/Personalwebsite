import React from "react";
import { motion } from "framer-motion";
export const Intro = () => {
  const animation = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: -550,
      transition: { delay: 2, duration: 3 },
      height: 0,
    },
  };
  const textAnim = {
    visible: { opacity: 1, transition: { delay: 0.2, duration: 1 } },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      initial="visible"
      animate="hidden"
      variants={animation}
      className="flex w-full justify-center bg-white h-screen"
    >
      <div className="flex items-center ">
        <motion.span
          initial="hidden"
          animate="visible"
          variants={textAnim}
          className="text-md sm:text-2xl tect-black"
        >
          Ninjas are not born, they are made
        </motion.span>
      </div>
    </motion.div>
  );
};

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "./Header";
import HomeSection from "./HomeSection";
export const Intro = () => {
  const animation = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: -550,
      transition: { delay: 2, duration: 2 },
      height: "0%",
    },
  };
  const textAnim = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0, transition: { delay: 3, duration: 3 } },
  };
  const mainPage = {
    from: {
      opacity: 0,
    },
    to: { opacity: 1, transition: { delay: 2.5, duration: 2 } },
  };
  return (
    <>
      <motion.div
        initial="visible"
        animate="hidden"
        variants={animation}
        className=" absolute flex w-full justify-center items-center  h-screen "
      >
        <div className="flex items-center flex-col justify-center ">
          <div className="flex h-10 w-full relative">
            <Image
              className=" flex items-end justify-items-end"
              src="https://freesvg.org/img/ninjasolo.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={textAnim}
            className="text-md sm:text-2xl text-gray-900"
          >
            Ninjas are not born, they are made
          </motion.span>
        </div>
      </motion.div>
    </>
  );
};

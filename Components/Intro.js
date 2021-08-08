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
      height: 0,
      transition: { delay: 2, duration: 3 },
    },
  };
  const textAnim = {
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 1 },
    },
    hidden: { opacity: 0 },
  };
  const mainPage = {
    visible: {
      opacity: 1,
      display: "inline-flex",
      transition: { y: 0, delay: 3, duration: 1 },
    },
    hidden: { y: 0, opacity: 0, display: "none" },
  };
  return (
    <>
      <motion.div
        initial="visible"
        animate="hidden"
        variants={animation}
        className="flex w-full justify-center bg-white h-screen "
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
            className="text-md sm:text-2xl tect-black"
          >
            Ninjas are not born, they are made
          </motion.span>
        </div>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={mainPage}>
        <Header />
      </motion.div>
    </>
  );
};

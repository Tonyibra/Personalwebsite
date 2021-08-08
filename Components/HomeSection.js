import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export const HomeSection = () => {
  const hoverEffect = {
    visible: {
      opacity: 1,
      y: 0,
      z: 0,
    },
    hidden: { opacity: 0, y: -15, z: 0 },
  };
  return (
    <section className="p-6 sm:p-8 md:p-10 flex flex-col my-20 mx-10">
      <div className="relative h-[120px] w-[120px]">
        <Image
          className="border border-gray-700 rounded-full"
          layout="fill"
          src="https://scontent.fbey4-1.fna.fbcdn.net/v/t1.6435-9/157244984_3746894012058664_3480019615194438320_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=174925&_nc_ohc=uRtJkLzN9UYAX8gviiO&_nc_ht=scontent.fbey4-1.fna&oh=e07dfb0ff037dddf8cee06383e5714f2&oe=613601EA"
        />
      </div>
      <div className="pt-6">
        <span className="font-bold text-5xl ">Hi, I'm Tony! 👋 </span>
        <p className="font-semibold text-xl sm:text-2xl md:text-3xl xl:text-4xl pt-4">
          Full-stack ninja, student, Currently Front end engineer
          <a href="" className=" relative text-indigo-600 cursor-pointer">
            @PropertyCard
            <motion.span
              whileHover="hover"
              initial="hidden"
              whileHover={{ opacity: 0, y: 0, z: 0 }}
              variants={hoverEffect}
              className="absolute bottom-0 left-0 w-full bg-blue-700 h-0.5"
            ></motion.span>
          </a>
        </p>
      </div>
      <div className="flex pt-6">
        <div className="relative h-6 w-6 my-4 transition-all duration-200 ease-out hover:scale-125 hover:rotate-12 ">
          <Image
            className="cursor-pointer"
            src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-github-1.png"
            layout="fill"
          />
        </div>
        <div className="relative h-6 w-6 m-4 transition-all duration-200 ease-out hover:scale-125 hover:rotate-12 ">
          <Image
            className="cursor-pointer"
            src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-linkedin-3.png"
            layout="fill"
          />
        </div>
        <div className="relative h-6 w-6 my-4 transition-all duration-200 ease-out hover:scale-125 hover:rotate-12 ">
          <Image
            className="cursor-pointer"
            src="https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-instagram-13.png"
            layout="fill"
          />
        </div>
      </div>
      <div>
        <p
          className="pb-4 py-6 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl
        "
        >
          I am a second year CS student at NDU.
        </p>
        <p className="pb-6 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
          I enjoy creating Webapps and mobile apps with cool designs.
          <br />
          My technology stack includes React,TypeScript and Nodejs
        </p>
        <p className="pb-6 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
          I am also freelancing at upwork
        </p>
      </div>
    </section>
  );
};

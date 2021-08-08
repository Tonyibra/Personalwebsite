import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export const HomeSection = () => {
  const [isHovered, setHovered] = React.useState(false);

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
        <span className="font-bold text-5xl ">Hi, I'm Timka! 👋</span>
        <p className="font-semibold text-3xl pt-4">
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
    </section>
  );
};

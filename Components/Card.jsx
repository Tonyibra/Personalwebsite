import React from "react";
import Image from "next/image";
import { SocialImage } from "./SocialImage";
export const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="relative mb-4 shadow-lg">
      <div className="px-6 py-6 md:p-0">
        <div className="relative top-0 flex flex-col mb-4 ">
          <span className="mx-6 text-gray-900 font-bold cursor-pointer text-2xl sm:text-2xl">
            {item.title}
          </span>
          <span className="mx-6 text-black-700 font-semibold cursor-pointer text-xl sm:text-xl">
            {item.subtitle}
          </span>
          <p className="mx-6 pt-4 text-black-700 cursor-pointer text-md sm:text-xl">
            {item.about}
          </p>
          <div className="mx-6 pt-4 text-black-700  cursor-pointer text-md sm:text-xl">
            {item.stack?.map((tool, idx) => (
              <span key={idx} className=" cursor-pointer mx-2">
                {tool}
              </span>
            ))}
            <SocialImage src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-github-1.png" />
          </div>
        </div>
      </div>
      <div className="absolute md:right-0 md:w-7/12 md:-top-6 top-0 h-full rounded-lg md:left-0">
        <img
          className="object-cover w-full h-full rounded-lg opacity-30 md:h-auto dark:opacity-40 md:opacity-100 md:dark:opacity-80"
          src={item.img}
        />
      </div>
    </div>
  );
};

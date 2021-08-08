import React from "react";
import Image from "next/image";
import { SocialImage } from "./SocialImage";
export const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div className="py-8">
        <div className="absolute h-[300px] w-[500px] shadow-lg md:relative">
          <Image
            className="opacity-30"
            objectFit="contain"
            layout="fill"
            src="https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2019/10/Google-Docs-e1570528347607.jpg"
          />
        </div>
      </div>
      <div className="relative top-0 flex flex-col">
        <span className="mx-6 text-gray-900 font-bold cursor-pointer text-2xl sm:text-2xl">
          Google Docs Clone
        </span>
        <span className="mx-6 text-gray-700 font-semibold cursor-pointer text-xl sm:text-xl">
          Freshest ICPC competition
        </span>
        <p className="mx-6 pt-4 text-gray-900  cursor-pointer text-md sm:text-xl">
          Landing page for the largest open programming competition organized by
          Nazarbayev University students.
        </p>
        <div className="mx-6 pt-4 text-gray-900  cursor-pointer text-md sm:text-xl">
          <span className="cursor-pointer">React</span>
          <span className=" cursor-pointer mx-2">Gatsby</span>
          <span className=" cursor-pointer space-x-4">Node.js</span>
        </div>
      </div>
      <div>
        <div className="relative h-6 w-6 m-6 pt-4">
          <SocialImage src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-github-1.png" />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";
export const SocialImage = ({ src }) => {
  return (
    <div className="relative h-6 w-6 my-4 transition-all duration-200 ease-out hover:scale-125 hover:rotate-12">
      <Image
        className="cursor-pointer"
        src={src}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

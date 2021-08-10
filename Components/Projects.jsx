import React from "react";
import { Card } from "./Card";

export const Projects = ({ data }) => {
  return (
    <div className="p-4 sm:p-8 md:px-10 xl:mx-10">
      <span className="text-gray-900 font-bold text-4xl sm:text-2xl">
        Projects
      </span>
      <p className="text-gray-900 pt-4 pb-9">
        Here are some of my most favourite projects that I enjoyed coding and
        designing from scratch
      </p>
      {data?.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </div>
  );
};

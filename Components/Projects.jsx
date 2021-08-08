import React from "react";
import { Card } from "./Card";

export const Projects = () => {
  return (
    <div className="p-6 sm:p-8 md:px-10 mx-10">
      <span className="text-gray-900 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
        Projects
      </span>
      <p className="text-gray-900 pt-4">
        Here are some of my most favourite projects that I enjoyed coding and
        designing from scratch
      </p>
      <Card
        title="test"
        subtitle="subtitle"
        about="lorem"
        stack={["React,TypeScript,Rest"]}
      />
    </div>
  );
};

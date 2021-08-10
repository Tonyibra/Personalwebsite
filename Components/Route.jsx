import React, { useEffect } from "react";
import { Header } from "./Header";
import { HomeSection } from "./HomeSection";
import { Projects } from "./Projects";

const Route = ({ data }) => {
  return (
    <section>
      <Header />
      <HomeSection />
      <Projects data={data} />
    </section>
  );
};

export default Route;

import React, { useEffect } from "react";
import { Header } from "./Header";
import { HomeSection } from "./HomeSection";
import { Projects } from "./Projects";

const Route = () => {
  return (
    <section>
      <Header />
      <HomeSection />
      <Projects />
    </section>
  );
};

export default Route;

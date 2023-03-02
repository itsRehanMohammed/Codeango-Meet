import React from "react";
import Hero from "../Components/Hero/Hero";
import Values from "../Components/Values/Values";
import IntroBanner from "../Components/Banner/IntroBanner";

const Home = () => {
  return (
    <div>
      <Hero />
      <IntroBanner />
      <Values />
    </div>
  );
};

export default Home;

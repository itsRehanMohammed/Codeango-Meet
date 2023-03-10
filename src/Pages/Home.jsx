import React, { useEffect } from "react";
import Hero from "../Components/Hero/Hero";
import Values from "../Components/Values/Values";
import IntroBanner from "../Components/Banner/IntroBanner";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Home = ({ meetID, setmeetID }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams({});
  }, []);

  return (
    <div>
      <Navbar />
      <Hero meetID={meetID} setmeetID={setmeetID} />
      <IntroBanner />
      <Values />
      <Footer />
    </div>
  );
};

export default Home;

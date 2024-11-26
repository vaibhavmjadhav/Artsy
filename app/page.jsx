// import React from "react";
import Feed from "@components/Feed";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Feedback from "@components/Feedback";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <br />
      <Feed />
      <Feedback/>
      <Footer/>
    </>
  );
};

export default Home;

import React from "react";
import Header from "../../Shared/Header";
import Books from "./Books";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Books></Books>
    </div>
  );
};

export default Home;

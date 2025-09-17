import React from "react";
import "./designs/main.css";
import SwiperComponent from "./SwiperComponent";
import News from "./News";
import Hero from "./Hero";
import TvPrograms from "./TvPrograms";
import Publicity from "./Publicity";

function Main() {
  return (
    <div className="main">
      <h2> </h2>
      <SwiperComponent />
      <News />
      <Hero />
      <TvPrograms />
      <Publicity />

    </div>
  );
}

export default Main;

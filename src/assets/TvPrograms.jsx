import React from "react";
import "./designs/tvprograms.css";

const programs = [
  {
    id: 1,
    img: "https://picsum.photos/400/250?random=11",
    title: "Tonggi dastur"
  },
  {
    id: 2,
    img: "https://picsum.photos/400/250?random=12",
    title: "Kunduzgi yangiliklar"
  },
  {
    id: 3,
    img: "https://picsum.photos/400/250?random=13",
    title: "Kechki show"
  },
  {
    id: 4,
    img: "https://picsum.photos/400/250?random=14",
    title: "Maxsus ko‘rsatuv"
  }
];

const TvPrograms = () => {
  return (
    <section className="tv-section">
      <div className="tv-header">
        <h3>Teledasturlar</h3>
        <a href="#">Barchasi →</a>
      </div>
      <div className="tv-grid">
        <div className="tv-card big">
          <img src={programs[0].img} alt={programs[0].title} />
          <h4>{programs[0].title}</h4>
        </div>
        <div className="tv-card wide">
          <img src={programs[1].img} alt={programs[1].title} />
          <h4>{programs[1].title}</h4>
        </div>
        <div className="tv-card small">
          <img src={programs[2].img} alt={programs[2].title} />
          <h4>{programs[2].title}</h4>
        </div>
        <div className="tv-card small">
          <img src={programs[3].img} alt={programs[3].title} />
          <h4>{programs[3].title}</h4>
        </div>
      </div>
    </section>
  );
};

export default TvPrograms;
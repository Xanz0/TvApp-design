import React from "react";
import "./designs/hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Chap qism (rasm) */}
        <div className="hero-left">
          <img
            src="https://picsum.photos/600/400?random=10"
            alt="Hero"
          />
        </div>

        {/* O‘ng qism (matn) */}
        <div className="hero-right">
          <h1>Bizning Innovatsion Platformamiz</h1>
          <p>
            Biz texnologiyalar yordamida mijozlarga eng yaxshi xizmatlarni
            taqdim etamiz. Yangiliklarni kuzatib boring va imkoniyatlardan
            foydalaning.
          </p>
          <button className="hero-btn">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

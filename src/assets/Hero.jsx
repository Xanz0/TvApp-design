// import React from "react";
// import "./designs/hero.css";
// import { Link } from "react-router-dom";
// const Hero = () => {
//   return (
//     <section className="hero-section">
//       <div className="hero-container">
//         {/* Chap qism — Televizor */}
//         <div className="hero-left">
//           <div className="tv">
//             {/* Antenna */}
//             <div className="tv-antenna">
//               <div className="antenna-left"></div>
//               <div className="antenna-right"></div>
//             </div>

//             {/* Screen with animation */}
//             <div className="tv-screen">
//               <div className="animated-bg"></div>
//             </div>

//             {/* Stand */}
//             <div className="tv-stand"></div>
//           </div>
//         </div>

//         {/* O‘ng qism — Matn */}
//         <div className="hero-right">
//           <h1>Bizning Innovatsion Platformamiz</h1>
//           <p>
//             Biz texnologiyalar yordamida mijozlarga eng yaxshi xizmatlarni
//             taqdim etamiz. Yangiliklarni kuzatib boring va imkoniyatlardan
//             foydalaning.
//           </p>
//           <Link to="/vidm">
//             <button className="hero-btn">Read More</button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import "./designs/hero.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Chap qism — Televizor */}
        <div className="hero-left">
          <div className="tv">
            {/* Antenna */}
            <div className="tv-antenna">
              <div className="antenna-left"></div>
              <div className="antenna-right"></div>
            </div>

            {/* Screen with animation */}
            <div className="tv-screen">
              <div className="animated-bg"></div>
            </div>

            {/* Stand */}
            <div className="tv-stand"></div>
          </div>
        </div>

        {/* O‘ng qism — Matn */}
        <div className="hero-right">
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.description")}</p>
          <Link to="/vidm">
            <button className="hero-btn">{t("hero.button")}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;


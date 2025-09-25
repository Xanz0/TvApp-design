// // import React from "react";
// // import "./designs/tvprograms.css";

// // const programs = [
// //   {
// //     id: 1,
// //     img: "https://picsum.photos/400/250?random=11",
// //     title: "Tonggi dastur"
// //   },
// //   {
// //     id: 2,
// //     img: "https://picsum.photos/400/250?random=12",
// //     title: "Kunduzgi yangiliklar"
// //   },
// //   {
// //     id: 3,
// //     img: "https://picsum.photos/400/250?random=13",
// //     title: "Kechki show"
// //   },
// //   {
// //     id: 4,
// //     img: "https://picsum.photos/400/250?random=14",
// //     title: "Maxsus ko‘rsatuv"
// //   }
// // ];

// // const TvPrograms = () => {
// //   return (
// //     <section className="tv-section">
// //       <div className="tv-header">
// //         <h3>Teledasturlar</h3>
// //         <a href="#">Barchasi →</a>
// //       </div>
// //       <div className="tv-grid">
// //         <div className="tv-card big">
// //           <img src={programs[0].img} alt={programs[0].title} />
// //           <h4>{programs[0].title}</h4>
// //         </div>
// //         <div className="tv-card wide">
// //           <img src={programs[1].img} alt={programs[1].title} />
// //           <h4>{programs[1].title}</h4>
// //         </div>
// //         <div className="tv-card small">
// //           <img src={programs[2].img} alt={programs[2].title} />
// //           <h4>{programs[2].title}</h4>
// //         </div>
// //         <div className="tv-card small">
// //           <img src={programs[3].img} alt={programs[3].title} />
// //           <h4>{programs[3].title}</h4>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TvPrograms;

// import React from "react";
// import "./designs/tvprograms.css";
// import { useTranslation } from "react-i18next";
// import programsData from "../../public/tvProgramsData.json";

// const TvPrograms = () => {
//   const { t } = useTranslation();

//   // faqat dastlabki 4 ta chiqadi
//   const programs = programsData.programs.slice(0, 4);

//   return (
//     <section className="tv-section">
//       <div className="tv-header">
//         <h3>{t("tv.title")}</h3>
//         <a href="/tvprogramsall">{t("tv.all")}</a>
//       </div>
//       <div className="tv-grid">
//         <div className="tv-card big">
//           <img src={programs[0].img} alt={t(`tv.programs.${programs[0].key}`)} />
//           <h4>{t(`tv.programs.${programs[0].key}`)}</h4>
//         </div>
//         <div className="tv-card wide">
//           <img src={programs[1].img} alt={t(`tv.programs.${programs[1].key}`)} />
//           <h4>{t(`tv.programs.${programs[1].key}`)}</h4>
//         </div>
//         <div className="tv-card small">
//           <img src={programs[2].img} alt={t(`tv.programs.${programs[2].key}`)} />
//           <h4>{t(`tv.programs.${programs[2].key}`)}</h4>
//         </div>
//         <div className="tv-card small">
//           <img src={programs[3].img} alt={t(`tv.programs.${programs[3].key}`)} />
//           <h4>{t(`tv.programs.${programs[3].key}`)}</h4>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TvPrograms;


import React, { useEffect, useState } from "react";
import "./designs/tvprograms.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const TvPrograms = () => {
  const { t } = useTranslation();
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("/tvProgramsData.json")
      .then((res) => res.json())
      .then((data) => setPrograms(data.programs.slice(0, 4)));
  }, []);

  if (programs.length === 0) return null;

  return (
    <section className="tv-section">
      <div className="tv-header">
        <h3>{t("tv.title")}</h3>
        <Link to="/tvprogramsall">{t("tv.all")}</Link>
      </div>
      <div className="tv-grid">
        {programs.map((p, index) => (
          <Link
            key={p.id}
            to={`/tv/${p.id}`}
            className={`tv-card ${index === 0 ? "big" : index === 1 ? "wide" : "small"}`}
          >
            <img src={p.img} alt={t(`tv.programs.${p.key}`)} />
            <h4>{t(`tv.programs.${p.key}`)}</h4>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TvPrograms;

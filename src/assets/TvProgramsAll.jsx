import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import programsData from "../../public/tvProgramsData.json";
import "./designs/tvprogramsall.css";
import { Link } from "react-router-dom";

const TvProgramsAll = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const programsPerPage = 6; // Har bir sahifada 6 ta card

  const indexOfLast = currentPage * programsPerPage;
  const indexOfFirst = indexOfLast - programsPerPage;
  const currentPrograms = programsData.programs.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(programsData.programs.length / programsPerPage);

  return (
    <div className="programs-all">
      <h2 className="programs-title">{t("tv.allTitle")}</h2>

      <div className="programs-list">
        {currentPrograms.map((program) => (


            <div className="program-card" key={program.id}>
            <Link to={`/tv/${program.id}`}>

            {/* <img src={program.img} alt={t(`tv.programs.${program.key}`)} /> */}


              <video
                src="https://s3.storage.servisoft.uz/dermatology/AXB%20%20%2029.09.23%20%20%20%2020.00%20%20%20%2008.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="tv-video"
              />

            <div className="program-content">
              <h3>{t(`tv.programs.${program.key}`)}</h3>
              <p>{t(`tv.desc.${program.key}`)}</p>
            </div>
            </Link></div>

        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TvProgramsAll;

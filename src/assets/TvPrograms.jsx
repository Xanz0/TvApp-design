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
            {/* <img src={p.img} alt={t(`tv.programs.${p.key}`)} /> */}

              <video
                src="https://s3.storage.servisoft.uz/dermatology/AXB%20%20%2029.09.23%20%20%20%2020.00%20%20%20%2008.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="tv-video"
              />

            <h4>{t(`tv.programs.${p.key}`)}</h4>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TvPrograms;

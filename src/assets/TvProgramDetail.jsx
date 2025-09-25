import { useParams } from "react-router-dom";
import programsData from "../../public/tvProgramsData.json";
import { useTranslation } from "react-i18next";
import "./designs/detail.css";

const TvProgramDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const program = programsData.programs.find((p) => p.id === parseInt(id));

  if (!program) return <h2>{t("notFound")}</h2>;

  return (
    <div className="detail-container">
      <div className="detail-left">


        {/* <img
          src={program.img}
          alt={t(`tv.programs.${program.key}`)}
          className="detail-img"
        /> */}
      <a href="https://s3.storage.servisoft.uz/dermatology/AXB%20%20%2029.09.23%20%20%20%2020.00%20%20%20%2008.mp4" target="_blank" rel="noopener noreferrer">
        <video
                src="https://s3.storage.servisoft.uz/dermatology/AXB%20%20%2029.09.23%20%20%20%2020.00%20%20%20%2008.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="tv-video"
              />

          </a>
      </div>
      <div className="detail-right">
        <h2>{t(`tv.programs.${program.key}`)}</h2>
        <p>{t(`tv.desc.${program.key}`)}</p>
      </div>
    </div>
  );
};

export default TvProgramDetail;

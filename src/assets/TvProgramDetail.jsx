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
        <img
          src={program.img}
          alt={t(`tv.programs.${program.key}`)}
          className="detail-img"
        />
      </div>
      <div className="detail-right">
        <h2>{t(`tv.programs.${program.key}`)}</h2>
        <p>{t(`tv.desc.${program.key}`)}</p>
      </div>
    </div>
  );
};

export default TvProgramDetail;

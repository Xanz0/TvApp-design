import React from "react";
import { useTranslation } from "react-i18next";
import "./designs/vidm.css";

const Vidm = () => {
  const { t } = useTranslation();

  return (
    <section className="vidm-section">
      {/* 🔹 3D Prisma Background */}
      <div className="prism-bg">
        <div className="prism prism1"></div>
        <div className="prism prism2"></div>
        <div className="prism prism3"></div>
        <div className="prism prism4"></div>
      </div>

      {/* 🔹 Kontent */}
      <div className="vidm-content">
        <h2 className="vidm-title">{t("vidm.title")}</h2>
        <p className="vidm-description">{t("vidm.description")}</p>

        <div className="video-wrapper">
          <video controls>
            <source
              src="https://s3.storage.servisoft.uz/dermatology/video_2025-09-22_12-06-35.mp4"
              type="video/mp4"
            />
            {t("vidm.noSupport")}
          </video>
        </div>
      </div>
    </section>
  );
};

export default Vidm;

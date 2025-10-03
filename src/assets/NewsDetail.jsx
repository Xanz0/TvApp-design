import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./designs/detail.css";

const NewsDetail = () => {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Base URL
  const ENV_BASE = import.meta?.env?.VITE_ROOT_URL || "";
  const BASE = ENV_BASE ? ENV_BASE.replace(/\/$/, "") : "";

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const apiUrl = BASE ? `${BASE}/api/News/${id}` : `/api/News/${id}`;
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`Server xatosi: ${res.status}`);

        const result = await res.json();
        console.log("NewsDetail API javobi:", result);

        // agar {success, data} bo'lsa -> result.data
        const newsData = result?.data || result;
        setNewsItem(newsData);
      } catch (err) {
        console.error("Xatolik:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id, BASE]);

  if (loading) return <p>{t("loading") || "Yuklanmoqda..."}</p>;
  if (error) return <p>Xatolik: {error}</p>;
  if (!newsItem) return <p>Ma’lumot topilmadi</p>;

  // Tilga qarab tanlash
  const lang = i18n.language || "uz";
  const title =
    lang === "ru" ? newsItem.titleRu : lang === "en" ? newsItem.titleEn : newsItem.titleUz;

  // description / contentni birlashtirib olish
  const content =
    lang === "ru"
      ? newsItem.contentRu || newsItem.headerContentRu || newsItem.mainContentRu
      : lang === "en"
      ? newsItem.contentEn || newsItem.headerContentEn || newsItem.mainContentEn
      : newsItem.contentUz ||
        newsItem.headerContentUz ||
        newsItem.mainContentUz ||
        newsItem.footerContentUz;

  // Rasm linki
  const imageSrc = newsItem.newsImageId
    ? BASE
      ? `${BASE}/api/Image/${newsItem.newsImageId}`
      : `/api/Image/${newsItem.newsImageId}`
    : null;

  return (
    <div className="detail-page">
      <div className="detail-left">
        {imageSrc ? (
          <img src={imageSrc} alt={title || "News"} />
        ) : (
          <p>Rasm mavjud emas</p>
        )}
      </div>

      <div className="detail-right">
        <h2>{title}</h2>
        <div className="detail-content">{content}</div>
      </div>
    </div>
  );
};

export default NewsDetail;







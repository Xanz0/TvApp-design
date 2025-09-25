import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./designs/detail.css";

const NewsDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    fetch("/news.json") // public ichidan yuklanadi
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((n) => String(n.id) === id);
        setNewsItem(item);
      });
  }, [id]);

  if (!newsItem) {
    return <p>{t("loading")}</p>;
  }

  return (
    <div className="detail-page">
      <div className="detail-left">
        <img src={newsItem.img} alt={t(newsItem.titleKey)} />
      </div>
      <div className="detail-right">
        <h2>{t(newsItem.titleKey)}</h2>
        <p>{t(newsItem.descriptionKey)}</p>
      </div>
    </div>
  );
};

export default NewsDetail;

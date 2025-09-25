import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./designs/news.css";
import { Link } from "react-router-dom";

const News = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data.slice(0, 4))); // faqat 4ta yangilik
  }, []);

  return (
    <section className="news-section">
      <div className="news-header">
        <h3>{t("news.header")}</h3>
        <Link to="/newsall">{t("news.all")}</Link>
      </div>
      <div className="news-grid">
        {news.map((item) => (


          <Link 
            to={`/news/${item.id}`} 
            key={item.id} 
            className="news-card"
          >


            <img src={item.img} alt={t(item.titleKey)} />
         

            <div className="news-content">
              <h4>{t(item.titleKey)}</h4>
              <p>{t(item.descriptionKey)}</p>
            </div>
          </Link>



     


        ))}
      </div>
    </section>
  );
};

export default News;


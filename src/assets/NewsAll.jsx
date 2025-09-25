import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import newsData from '../../public/news.json'
import "./designs/newsall.css";
import { Link } from "react-router-dom";


const NewsAll = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = newsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="news-section">
      {/* Tepada faqat "Barcha yangiliklar" yozuvi */}
      <h3 className="news-all-header">{t("news.headerAll")}</h3>

      {/* Yangiliklar ro‘yxati */}
      <div className="news-list">
        {currentNews.map((news) => (


          // <div key={news.id} className="news-card list">
          //   <img src={news.img} alt={t(news.titleKey)} />
          //   <div className="news-content">
          //     <h4>{t(news.titleKey)}</h4>
          //     <p>{t(news.descriptionKey)}</p>
          //   </div>
          // </div>


            <div className="news-card list" key={news.id}>
  <Link to={`/news/${news.id}`}>
    <img src={news.img} alt={t(news.titleKey)} />
    <div className="news-content">
      <h4>{t(news.titleKey)}</h4>
      <p>{t(news.descriptionKey)}</p>
    </div>
  </Link>
</div>


        ))}
      </div>

      {/* Pagination tugmalari */}
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default NewsAll;

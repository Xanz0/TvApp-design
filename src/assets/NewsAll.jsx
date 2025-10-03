import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./designs/newsall.css";

const NewsAll = () => {
  const { t, i18n } = useTranslation();
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // BASE - .env dagi VITE_ROOT_URL yoki '' (proxy uchun /api ishlatamiz)
  const ENV_BASE = import.meta?.env?.VITE_ROOT_URL || "";
  const BASE = ENV_BASE ? ENV_BASE.replace(/\/$/, "") : "";

  useEffect(() => {
    setLoading(true);
    setError(null);

    const apiUrl = BASE ? `${BASE}/api/News` : `/api/News`;
    console.log("API_URL:", apiUrl);

    fetch(apiUrl)
      .then(async (res) => {
        const contentType = res.headers.get("content-type") || "";
        const text = await res.text();

        if (!contentType.includes("application/json")) {
          try {
            return JSON.parse(text);
          } catch (e) {
            throw new Error(
              `Server JSON emas — content-type: ${contentType}. Response starts with: ${text.slice(
                0,
                200
              )}`
            );
          }
        }

        try {
          return JSON.parse(text);
        } catch (e) {
          return res.json();
        }
      })
      .then((data) => {
        console.log("News API javobi:", data);
        let arr = [];

        if (Array.isArray(data)) arr = data;
        else if (data && Array.isArray(data.data)) arr = data.data;
        else if (data && data.success && Array.isArray(data.data)) arr = data.data;
        else {
          console.warn("API data array kutildi, ammo boshqa format:", data);
          arr = [];
        }

        setNewsList(arr);
        setCurrentPage(1);
      })
      .catch((err) => {
        console.error("Xatolik (NewsAll):", err);
        setError(err.message || "Yangiliklarni olishda xatolik");
      })
      .finally(() => setLoading(false));
  }, [BASE]);

  if (loading) return <p className="news-loading">{t("loading") || "Yuklanmoqda..."}</p>;
  if (error)
    return (
      <section className="news-section">
        <h3 className="news-all-header">{t("news.headerAll")}</h3>
        <div className="news-error">
          <p>Yangiliklarni olishda xato: {error}</p>
        </div>
      </section>
    );

  // Pagination
  const totalPages = Math.max(1, Math.ceil(newsList.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = newsList.slice(startIndex, startIndex + itemsPerPage);

  // til suffix: 'Uz'|'Ru'|'En'
  const lang = (i18n.language || "uz").toLowerCase();
  const suffix = lang === "ru" ? "Ru" : lang === "en" ? "En" : "Uz";

  return (
    <section className="news-section">
      <h3 className="news-all-header">{t("news.headerAll")}</h3>

      <div className="news-list">
        {currentNews.map((item) => {
          // title/content - tilga mos
          const title = item[`title${suffix}`] || item.titleUz || item.title || "No title";
          const content =
            item[`content${suffix}`] ||
            item[`mainContent${suffix}`] ||
            item.contentUz ||
            item.mainContentUz ||
            item.content ||
            "";

          // rasm: to'g'ridan-to'g'ri imagePath bo'lsa ishlatamiz, yo'q bo'lsa imageId/newsImageId orqali
          const imagePathDirect =
            item.imagePath || item.image?.imagePath || item.imageUrl || null;

          const imageId =
            item.imageId ??
            item.newsImageId ??
            (item.image && (item.image.id ?? item.image.imageId)) ??
            null;

          const imageSrc = imagePathDirect
            ? imagePathDirect
            : imageId
            ? BASE
              ? `${BASE}/api/Image/${imageId}`
              : `/api/Image/${imageId}`
            : "/noimage.png"; // public papkada fallback rasm bo'lsin

          return (
            <div className="news-card list" key={item.id ?? item.newsBackTVId ?? Math.random()}>
              <Link to={`/news/${item.id ?? item.newsBackTVId ?? ""}`}>
                <div className="thumb">
                  <img
                    src={imageSrc}
                    alt={title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/noimage.png";
                    }}
                  />
                </div>

                <div className="news-content">
                  <h4>{title}</h4>
                  <p>{(typeof content === "string" ? content.replace(/<\/?[^>]+(>|$)/g, "") : content).slice(0, 160) + (content.length > 160 ? "..." : "")}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            {t("pagination.prev") || "‹"}
          </button>

          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`page-btn ${currentPage === idx + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}

          <button
            className="page-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          >
            {t("pagination.next") || "›"}
          </button>
        </div>
      )}
    </section>
  );
};

export default NewsAll;


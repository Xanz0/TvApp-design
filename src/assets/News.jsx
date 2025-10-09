import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./designs/news.css";

const News = () => {
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Base URL: from .env (VITE_ROOT_URL) or empty -> use relative /api path
  const ENV_BASE = import.meta?.env?.VITE_ROOT_URL || "";
  // If ENV_BASE provided, ensure no trailing slash
  const BASE = ENV_BASE ? ENV_BASE.replace(/\/$/, "") : "";

  useEffect(() => {
    setLoading(true);
    setError(null);

    // If we have BASE (absolute), use ${BASE}/api/News, otherwise use relative /api/News
    const apiUrl = BASE ? `${BASE}/api/News` : "/api/News";

    // Debug log (ok to remove later)
    console.log("API_URL:", apiUrl);

    fetch(apiUrl, {
      // credentials: "include" // agar cookie/auth kerak bo'lsa yoqing
    })
      .then(async (res) => {
        // Agar server HTML (masalan 404 page) qaytarsa, xato berish uchun tekshiramiz
        const contentType = res.headers.get("content-type") || "";
        const text = await res.text();

        // Try parse JSON safely
        if (!contentType.includes("application/json")) {
          // Agar text boshida '<' bo'lsa — HTML qaytgan (ko'pincha CORS yoki 404)
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

        // If JSON content-type, parse normally
        try {
          return JSON.parse(text);
        } catch (e) {
          // fallback: try res.json()
          return res.json();
        }
      })
      .then((data) => {
        // Swagger bo'yicha API individual yangilik obyektlari: { titleUz, titleRu, titleEn, contentUz, ..., newsImageId, id, ...}
        if (!Array.isArray(data)) {
          // Agar API obyekt ichida {data: [...]} kabi qaytsa, moslashuv
          if (data && Array.isArray(data.data)) {
            setNews(data.data.slice(0, 4));
          } else {
            console.warn("API data expected array but got:", data);
            setNews([]);
          }
        } else {
          setNews(data.slice(0, 4));
        }
      })
      .catch((err) => {
        console.error("Xatolik (News fetch):", err);
        setError(err.message || "Failed to fetch news");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [BASE]);

  if (loading) return <p className="news-loading">Yuklanmoqda...</p>;

  if (error)
    return (
      <section className="news-section">
        <div className="news-header">
          <h3>{t("news.header")}</h3>
          <Link to="/newsall">{t("news.all")}</Link>
        </div>
        <div className="news-error">
          <p>Yangiliklarni olishda xato: {error}</p>
          <p>
            Agar CORS bilan bog'liq bo'lsa: backendga Access-Control-Allow-Origin header qo'shing
            yoki Vite proxy sozlang.
          </p>
        </div>
      </section>
    );

  return (
    <section className="news-section">
      <div className="news-header">
        <h3>{t("news.header")}</h3>
        <Link to="/newsall">{t("news.all")}</Link>
      </div>
      <div className="news-grid">
        {news.map((item) => {
          const lang = i18n.language || "uz";
          const title =
            lang === "ru" ? item.titleRu : lang === "en" ? item.titleEn : item.titleUz;
          const content =
            lang === "ru" ? item.contentRu : lang === "en" ? item.contentEn : item.contentUz;

          // Rasm manzili: agar BASE mavjud bo'lsa absolute, aks holda relative /api/Image/{id} (Vite proxy)
          const imageSrc = item.newsImageId
            ? BASE
              ? `${BASE}/api/Image/${item.newsImageId}`
              : `/api/Image/${item.newsImageId}`
            : null;

          // short description (agar content juda uzun bo'lsa)
          const shortDesc =
            typeof content === "string"
              ? content
                  .replace(/<\/?[^>]+(>|$)/g, "")
                  .slice(0, 120) + (content.length > 120 ? "..." : "")
              : "";

          return (
            <Link
              to={`/news/${item.id ?? item.newsBackTVId ?? ""}`}
              key={item.id ?? item.newsImageId ?? Math.random()}
              className="news-card"
            >
              {imageSrc ? (
                // img onError bilan fallback mumkin
                <img
                  src={imageSrc}
                  alt={title || "news image"}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <div className="news-placeholder" aria-hidden="true">
                  {/* agar rasm bo'lmasa placeholder */}
                </div>
              )}
              <div className="news-content">
                <h4>{title}</h4>
                <p>{shortDesc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default News;

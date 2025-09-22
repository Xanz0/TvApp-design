// import React from "react";
// import "./designs/footer.css";

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="container footer-inner">

//       <nav className="footer-links">
//           <a href="/Motion">Biz haqimizda</a>
//           <a href="#">Aloqa</a>
//           <a href="#">Maxfiylik siyosati</a>
//         </nav>

//         <p className="footer-text">
//           © {new Date().getFullYear()} Navoiy Yoshlar Tv. Barcha huquqlar himoyalangan.
//         </p>

        

//         <div className="footer-contact">
//           <p>📍 Navoiy, O‘zbekiston</p>
//           <p>📞 +998 (90) 123-45-67</p>
//           <p>📧 info@navoiy.uz</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from "react";
import "./designs/footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* Links */}
        <nav className="footer-links">
          <a href="/Motion">{t("footer.about")}</a>
          <a href="#">{t("footer.contact")}</a>
          <a href="#">{t("footer.privacy")}</a>
        </nav>

        {/* Text */}
        <p className="footer-text">
          © {new Date().getFullYear()} Navoiy Yoshlar Tv. {t("footer.rights")}
        </p>

        {/* Contact Info */}
        <div className="footer-contact">
          <p>📍 {t("footer.address")}</p>
          <p>📞 {t("footer.phone")}</p>
          <p>📧 {t("footer.email")}</p>
        </div>
      </div>
    </footer>
  );
}


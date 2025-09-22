// import React from "react";
// import "./designs/publicity.css";
// import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";

// export default function Publicity() {
//   return (
//     <section className="publicity">
//       <div className="container publicity-inner">
//         {/* Phone Image */}
//         <div className="publicity-image">
//           <img
//             src="https://yoshlartv.uz/img/pic-mobile.png"
//             alt="Phone"
//           />
//         </div>

//         {/* Content */}
//         <div className="publicity-content">
//           <h2 className="publicity-title">Doim habardor bo‘ling</h2>
//           <p className="publicity-desc">
//             Mobil ilovamizni yuklab oling va eng so‘nggi yangiliklardan birinchi
//             bo‘lib xabardor bo‘ling.
//           </p>

//           {/* App Buttons */}
//           <div className="app-buttons">
//             <a href="#" className="store-btn appstore">
//               <img
//                 src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//                 alt="App Store"
//               />
//             </a>
//             <a href="#" className="store-btn googleplay">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//                 alt="Google Play"
//               />
//             </a>
//           </div>

//           {/* Social Icons */}
//           <div className="social-icons">
//             <a href="#"><FaFacebookF /></a>
//             <a href="#"><FaInstagram /></a>
//             <a href="#"><FaTelegramPlane /></a>
//             <a href="#"><FaYoutube /></a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







import React from "react";
import "./designs/publicity.css";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Publicity() {
  const { t } = useTranslation();

  return (
    <section className="publicity">
      <div className="container publicity-inner">
        {/* Phone Image */}
        <div className="publicity-image">
          <img
            src="https://yoshlartv.uz/img/pic-mobile.png"
            alt={t("publicity.phoneAlt")}
          />
        </div>

        {/* Content */}
        <div className="publicity-content">
          <h2 className="publicity-title">{t("publicity.title")}</h2>
          <p className="publicity-desc">{t("publicity.desc")}</p>

          {/* App Buttons */}
          <div className="app-buttons">
            <a href="#" className="store-btn appstore">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt={t("publicity.appstoreAlt")}
              />
            </a>
            <a href="#" className="store-btn googleplay">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt={t("publicity.googleplayAlt")}
              />
            </a>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1FmQhHWcyz/" target="_blank" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/navoiyyoshlar_televideniyesi?igsh=MWJ5YTc3ZmNpMWoycQ==" target="_blank" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://t.me/navoiyyoshlar_tv " target="_blank" aria-label="Telegram"><FaTelegramPlane /></a>
            <a href="https://www.youtube.com/@NavoiuzOfficial" target="_blank" aria-label="YouTube"><FaYoutube /></a>
          </div>
          
        </div>
      </div>
    </section>
  );
}


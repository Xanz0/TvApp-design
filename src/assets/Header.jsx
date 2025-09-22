// import { useState } from "react";
// import ReactCountryFlag from "react-country-flag";
// import i18n from "i18next";
// import "./designs/header.css";
// import logo from "../../public/NYoTv.png";

// const Header = () => {
//   const [language, setLanguage] = useState("UZ");
//   const [open, setOpen] = useState(false);

//   const flags = {
//     UZ: { code: "UZ", label: "O'zbekcha" },
//     RU: { code: "RU", label: "Русский" },
//     EN: { code: "GB", label: "English" }, 
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header-wrapper">
//           <div className="wrapper-top">
//             <a href="/">
//               <div className="top-left">
//                 <img src={logo} className="logo-img" alt="Logo" />
//                 <h3 className="logo-title"></h3>
//               </div>
//             </a>

//             <div className="top-right">
//               <ul className="nav-list">
//                 <li className="nav-item"><a href="/">Bosh sahifa</a></li>
//                 <li className="nav-item"><a href="/">Yangiliklar</a></li>
//                 <li className="nav-item"><a href="/Motion">Biz Haqimizda</a></li>
//                 <li className="nav-item"><a href="/progams">Teledasturlar</a></li>
//                 <li className="nav-item"><a href="/">Ijodkorlar</a></li>

//                 {/* 🌍 Dropdown til tanlash */}
//                 <li className="nav-item language-dropdown">
//                   <button
//                     className="dropdown-toggle"
//                     onClick={() => setOpen(!open)}
//                   >
//                     <ReactCountryFlag
//                       countryCode={flags[language].code}
//                       svg
//                       style={{
//                         width: "20px",
//                         height: "15px",
//                         borderRadius: "2px",
//                       }}
//                     />
//                     <span className="flag-label">{flags[language].label}</span>
//                     <span className="arrow">{open ? "▲" : "▼"}</span>
//                   </button>

//                   {open && (
//                     <ul className="dropdown-menu">
//                       {Object.keys(flags).map((key) => (
//                         <li key={key}>
//                           <button
//                             className="dropdown-item"
//                             onClick={() => {
//                               setLanguage(key);
//                               setOpen(false);
//                             }}
//                           >
//                             <ReactCountryFlag
//                               countryCode={flags[key].code}
//                               svg
//                               style={{
//                                 width: "20px",
//                                 height: "15px",
//                                 borderRadius: "2px",
//                               }}
//                             />
//                             <span>{flags[key].label}</span>
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;








import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // i18n konfiguratsiya faylini import qiling
import "./designs/header.css";
import logo from "../../public/NYoTv.png";

const Header = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("UZ");
  const [open, setOpen] = useState(false);

  const flags = {
    UZ: { code: "UZ", label: "O'zbekcha", lng: "uz" },
    RU: { code: "RU", label: "Русский", lng: "ru" },
    EN: { code: "GB", label: "English", lng: "en" },
  };

  const changeLanguage = (key) => {
    setLanguage(key);
    i18n.changeLanguage(flags[key].lng); // i18n tilini o‘zgartirish
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="wrapper-top">
            <a href="/">
              <div className="top-left">
                <img src={logo} className="logo-img" alt="Logo" />
                <h3 className="logo-title"></h3>
              </div>
            </a>

            <div className="top-right">
              <ul className="nav-list">
                <li className="nav-item"><a href="/">{t("nav.home")}</a></li>
                <li className="nav-item"><a href="/">{t("nav.news")}</a></li>
                <li className="nav-item"><a href="/Motion">{t("nav.about")}</a></li>
                <li className="nav-item"><a href="/programs">{t("nav.programs")}</a></li>
                <li className="nav-item"><a href="/">{t("nav.creators")}</a></li>

                {/* 🌍 Dropdown til tanlash */}
                <li className="nav-item language-dropdown">
                  <button
                    className="dropdown-toggle"
                    onClick={() => setOpen(!open)}
                  >
                    <ReactCountryFlag
                      countryCode={flags[language].code}
                      svg
                      style={{
                        width: "20px",
                        height: "15px",
                        borderRadius: "2px",
                      }}
                    />
                    <span className="flag-label">{flags[language].label}</span>
                    <span className="arrow">{open ? "▲" : "▼"}</span>
                  </button>

                  {open && (
                    <ul className="dropdown-menu">
                      {Object.keys(flags).map((key) => (
                        <li key={key}>
                          <button
                            className="dropdown-item"
                            onClick={() => changeLanguage(key)}
                          >
                            <ReactCountryFlag
                              countryCode={flags[key].code}
                              svg
                              style={{
                                width: "20px",
                                height: "15px",
                                borderRadius: "2px",
                              }}
                            />
                            <span>{flags[key].label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

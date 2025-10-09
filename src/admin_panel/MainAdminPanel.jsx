
// const MainAdminPanel = () => {

//   return (
//     <div className="admin-panel"> 

        
//     </div>
//   )
// }

// export default MainAdminPanel


import React, { useState } from "react";
import NewsAdmin from "./NewsAdmin";
import TvProgramsAdmin from "./TvProgramsAdmin";
import "./admin_panel_all_jsx/admin_css/admin.css";
import AdminHeader from "./AdminHeader";

// const MainAdmin = () => {
//   const [section, setSection] = useState("news");

//   return (
//     <div className="admin-container">
//         <AdminHeader />
//       <h1>Admin Panel</h1>
//       <div className="admin-tabs">
//         <button onClick={() => setSection("news")}>News</button>
//         <button onClick={() => setSection("tv")}>TV Programs</button>
//       </div>

//       {section === "news" ? <NewsAdmin /> : <TvProgramsAdmin />}
//     </div>
//   );
// };

// export default MainAdmin;

const MainAdminPanel = () => {
  const [section, setSection] = useState("news");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin";
  };

  return (
    <div className="admin-container">
      <AdminHeader />
      <h1 className="admin-title">Admin Panel</h1>

      <div className="admin-tabs">
        <div className="tab-left">
          <button
            onClick={() => setSection("news")}
            className={`tab-btn ${section === "news" ? "active" : ""}`}
          >
            <span>News</span>
          </button>
          <button
            onClick={() => setSection("tv")}
            className={`tab-btn ${section === "tv" ? "active" : ""}`}
          >
            <span>TV Programs</span>
          </button>
        </div>

        <div className="tab-right">
          <button onClick={handleLogout} className="logout-btn">
            <span>Logout</span>
          </button>
        </div>
      </div>

      {section === "news" ? <NewsAdmin /> : <TvProgramsAdmin />}
    </div>
  );
};

export default MainAdminPanel;
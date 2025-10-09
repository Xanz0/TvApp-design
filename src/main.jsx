// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import './i18n.jsx'
// // import Admin from './Admin.jsx'

// const path = window.location.pathname;

// // if (path === "/api/Auth/login") {
// //     const adminRoot = document.getElementById("admin-root");
// //     if (adminRoot) {
// //         createRoot(adminRoot).render(
// //             <StrictMode>
// //                   <Admin/>
// //             </StrictMode>
// //         );
// //     }
// // } else {
//     const root = document.getElementById("root");
//     if (root) {
//         createRoot(root).render(
//             <StrictMode>
//                 <App />
//             </StrictMode>
//         );
//     }
// // }


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n.jsx";
import App from "./App.jsx";
import Admin from "./Admin.jsx";
import MainAdminPanel from "./admin_panel/MainAdminPanel.jsx";

const root = document.getElementById("root");
const path = window.location.pathname;

if (root) {
  let ComponentToRender;

  // URL manzilga qarab sahifani tanlaymiz
  if (path.startsWith("/admin_panel")) {
    ComponentToRender = MainAdminPanel;
  } else if (path.startsWith("/admin")) {
    ComponentToRender = Admin;
  } else {
    ComponentToRender = App;
  }

  createRoot(root).render(
    <StrictMode>
      <ComponentToRender />
    </StrictMode>
  );
}



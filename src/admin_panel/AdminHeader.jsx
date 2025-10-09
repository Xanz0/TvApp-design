import React from "react";

const AdminHeader = () => {

  // const handleLogout = () => {
  //   localStorage.removeItem("token");

  //   window.location.href = "/admin";
  // };

  return (
    <div className="admin-panel-header-container">
      <header className="admin-header-root">
        {/* <button className="admin-panel-logout-btn" onClick={handleLogout}>
          Chiqish
        </button> */}
      </header>
    </div>
  );
};

export default AdminHeader;

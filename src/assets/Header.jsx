import "./designs/header.css";
import logo from "../../public/NYoTv.png";

const Header = () => {
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
                <li className="nav-item">
                  <a href="/">Bosh sahifa</a>
                </li>
                <li className="nav-item">
                  <a href="/">Yangiliklar</a>
                </li>
                <li className="nav-item">
                  <a href="/Motion">Biz Haqimizda</a>
                </li>
                <li className="nav-item">
                  <a href="/progams">Teledasturlar</a>
                </li>
                <li className="nav-item">
                  <a href="/">Ijodkorlar</a>
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
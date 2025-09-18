import "./designs/header.css";
import logo from "../../public/vite.svg"
// import Motion from "./Motion";
const Header = () => {
  return (
    <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="wrapper-top">
              <a href="/">
              <div className="top-left">
                <img src={logo} className="logo-img" alt="Logo" />
                
                <h3 className="logo-title">Tv App</h3>
              </div>
              </a>
              <div className="top-right">
                  <ul className="nav-list">
                    <a href="/Motion">
                    <li className="nav-item">Bosh sahifa</li>
                    </a>
                    <li className="nav-item">Yangiliklar</li> 
                    <li className="nav-item">Biz Haqimizda</li>
                    <li className="nav-item">Teledasturlar</li>
                    <li className="nav-item">Ijodkorlar</li>
                  </ul>
              </div>
            </div>

            
          </div>
        </div>
      
    </header>
  );
};

export default Header;

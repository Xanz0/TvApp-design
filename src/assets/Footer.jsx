import React from "react";
import "./designs/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

      <nav className="footer-links">
          <a href="#">Biz haqimizda</a>
          <a href="#">Aloqa</a>
          <a href="#">Maxfiylik siyosati</a>
        </nav>

        <p className="footer-text">
          © {new Date().getFullYear()} NavoiyTv. Barcha huquqlar himoyalangan.
        </p>

        

        <div className="footer-contact">
          <p>📍 Navoiy, O‘zbekiston</p>
          <p>📞 +998 (90) 123-45-67</p>
          <p>📧 info@navoiyv.uz</p>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import css from "./footer.module.scss";
export default function Footer() {
  return (
    <div className={css["footer"]}>
        <div className="container">
      <div className={css["footer-content"]}>
          <div className={css["footer-get-help"]}>
            <h2>GET HEPT</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Nike</a>
              </li>
              <li>
                <a href="#">Adidas</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className={css["footer-support"]}>
            <h2>SUPPORT</h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Phone</a>
              </li>
            </ul>
          </div>
          <div className={css["footer-register"]}>
            <h2>REGISTER</h2>
            <ul>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
      </div>
        </div>
      <div className={css["footer-author"]}>
        <p>
          © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn
          Khải.
        </p>
      </div>
    </div>
  );
}

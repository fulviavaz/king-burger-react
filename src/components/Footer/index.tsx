import React from "react";
import logo from "../../assets/logofooter.svg";
import ifood from "../../assets/ifoodft.svg";
import instagram from "../../assets/instaft.svg";
import styles from "./Footer.module.scss";
import { HashLink as Link } from "react-router-hash-link";
import { Anchor } from "antd";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className="footer__container__logo">
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.footer__container__links}>
          <Anchor targetOffset={50}>
            <div>
              <ul>
                <li>
                  <Link to="#home">Home</Link>
                </li>
                <li>
                  <Link to="#map">Localização</Link>
                </li>
                <li>
                  <Link to="#cardapio">Cardápio</Link>
                </li>
                <li>
                  <Link to="#home">Sobre</Link>
                </li>
              </ul>
            </div>
          </Anchor>
        </div>
        <div className={styles.footer__container__social}>
          <Link to="#" target="_blank">
            <img src={ifood} alt="ifood" />
          </Link>
          <Link to="#" target="_blank">
            <img src={instagram} alt="instagram" />
          </Link>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1171"
        height="2"
        viewBox="0 0 1171 2"
        fill="none"
      >
        <path
          d="M0.498047 0.60498L1170.5 0.604878"
          stroke="#1D0605"
          strokeOpacity="0.15"
        />
      </svg>
      <div className={styles.footer__container__copy}>
        <p>
          2022 © EmpireBurger.<span> Todos os direitos reservados.</span>
        </p>
      </div>
    </footer>
  );
}

import React from "react";
import styles from "./Schedulle.module.scss";
import schedulleIcon from "../../assets/sche.png";

export default function Schedulle() {
  return (
    <div className={styles.schedulle}>
      <div className={styles.schedulle__left}>
        <img src={schedulleIcon} alt="icone tempo" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="85"
          viewBox="0 0 2 85"
          fill="none"
        >
          <path
            d="M0.587158 0.864258V83.6052"
            stroke="#1D0605"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
        </svg>
        <div className={styles.schedulle__left__text}>
          <h1>Horário de funcionamento</h1>
          <p>Segunda-feira a sexta-feira: 17h00 - 23h00</p>
          <p>Sabado a Domíngo: 18h00 - 23h00</p>
        </div>
      </div>

      <div className={styles.schedulle__right}>
        <p>Não esqueça de marcar a gente no Instagram:</p>
        <h2>#empireburger</h2>
      </div>
    </div>
  );
}

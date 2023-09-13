import React from "react";
import styles from "./Grid.module.scss";
import oferta01 from "../../assets/oferta01.png";
import oferta02 from "../../assets/oferta02.png";
import oferta03 from "../../assets/oferta03.png";

export default function Grid() {
  return (
    <div className={styles.grid}>
      <div className={styles.grid__ofertaPrincipal}>
        <img src={oferta01} alt="oferta01" />
        <div className={styles.grid__title}>
          <h1>Burger imperial+batata</h1>
          <p>250kg</p>
        </div>
      </div>
      <div className={styles.grid__ofertaTop}>
        <img src={oferta02} alt="oferta02" />
        <div className={styles.grid__title}>
          <h1>batata</h1>
          <p>150kg</p>
        </div>
      </div>
      <div className={styles.grid__ofertaBottom}>
        <img src={oferta03} alt="oferta03" />
        <div className={styles.grid__title}>
          <h1>Sorvete</h1>
          <p>50kg</p>
        </div>
      </div>
    </div>
  );
}

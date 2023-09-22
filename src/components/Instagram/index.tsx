import React from "react";
import styles from "./Instagram.module.scss";
import inst1 from "../../assets/1.png";
import inst2 from "../../assets/2.png";
import inst3 from "../../assets/3.png";
import inst4 from "../../assets/4.png";

export default function Instagram() {
  return (
    <section className={styles.instagram}>
      <h2 className={styles.instagram__title}>Publicações do instagram</h2>
      <p className={styles.instagram__text}>
        Todos os nossos clientes são tratados como rei e rainha, com a nossa
        colunaria artesanal.
      </p>
      <div className={styles.instagram__photos}>
        <img src={inst1} alt="foto instagram" />
        <img src={inst2} alt="foto instagram" />
        <img src={inst3} alt="foto instagram" />
        <img src={inst4} alt="foto instagram" />
        <img src={inst1} alt="foto instagram" />
        
      </div>
      <div className={styles.instagram__tag}>
        <span>
          • #empireburger • #empireburger • #empireburger • #empireburger •
          #empireburger • #empireburger •
        </span>
      </div>
    </section>
  );
}

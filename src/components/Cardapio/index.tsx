import React from "react";
import styles from "./Cardapio.module.scss";
import cardapioimg from "../../assets/bgcardapio.png";

export default function Cardapio() {
  return (
    <section className={styles.cardapio}>
      <div className={styles.cardapio__left}>
        <img src={cardapioimg} alt="bg cardapio" />
        <div className={styles.cardapio__left__content}>
          <h2 className={styles.cardapio__left__title}>
            Escolha o seu combo imperial,<span>peça agora!</span>
          </h2>
          <p className={styles.cardapio__left__text}>
            Temos vários tipos de pratos para a nossa realeza, fique esperto
            porque temos sempre promoção!
          </p>
          <button className={styles.cardapio__left__button}>
            Ver Cardápio Completo
          </button>
        </div>
      </div>
      <div className={styles.cardapio__right}></div>
    </section>
  );
}

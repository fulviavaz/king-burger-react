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
      <div className={styles.cardapio__right}>
        <h2 className={styles.cardapio__right__title}>
          Cardápio imperial | Burger
        </h2>
        <div className={styles.cardapio__right__item}>
          <h3 className={styles.cardapio__right__subtitle}>
            Classic burger
            .........................................................................R$49,99
          </h3>
          <p className={styles.cardapio__right__description}>
            Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
            Tomate, Alface, Servidor do pão de batata
          </p>
        </div>

        <div className={styles.cardapio__right__item}>
          <h3 className={styles.cardapio__right__subtitle}>
            Special big burger
            .................................................................R$49,99
          </h3>
          <p className={styles.cardapio__right__description}>
            Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
            Tomate, Alface, Servidor do pão de batata
          </p>
        </div>

        <div className={styles.cardapio__right__item}>
          <h3 className={styles.cardapio__right__subtitle}>
            special big burger
            .................................................................R$49,99
          </h3>
          <p className={styles.cardapio__right__description}>
            Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
            Tomate, Alface, Servidor do pão de batata
          </p>
        </div>

        <div className={styles.cardapio__right__item}>
          <h3 className={styles.cardapio__right__subtitle}>
            Mexican burger
            ......................................................................R$49,99
          </h3>
          <p className={styles.cardapio__right__description}>
            Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
            Tomate, Alface, Servidor do pão de batata
          </p>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import styles from "./Cardapio.module.scss";
import cardapioimg from "../../assets/bgcardapio.png";
import CardapioItem from "./CardapioItem";

export default function Cardapio() {
  const [data, setData] = useState([
    {
      plate: "",
      price: 0,
      ingredients: "",
    },
  ]);

  useEffect(() => {
    fetch("https://api.brchallenges.com/api/empire-burger/menu")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section id="cardapio" className={styles.cardapio}>
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

        {data.length > 0 &&
          data.map((item) => (
            <CardapioItem
              key={item.plate}
              plate={item.plate}
              price={item.price}
              ingredients={item.ingredients}
            />
          ))}
      </div>
    </section>
  );
}

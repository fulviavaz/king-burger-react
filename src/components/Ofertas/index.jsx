import React from "react";
import styles from "./Ofertas.module.scss";
import Grid from "components/Grid";
import Schedulle from "components/Schedulle";

export default function Ofertas() {
  return (
    <section id="promocao" className={styles.ofertas}>
      <div className={styles.ofertas__container}>
        <h1 className={styles.ofertas__title}>Ofertas especiais</h1>
        <p className={styles.ofertas__text}>
          Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
          sempre estamos mudando o nosso cardapio.
        </p>
      </div>
      <Grid />
      <Schedulle />
    </section>
  );
}

import React from "react";
import style from "./Banner.module.scss";
import kingburger from "../../assets/kingburger.png";
import Menu from "components/Menu";

export default function Banner() {
  return (
    <section className={style.banner}>
      <div className={style.banner__content}>
        <h1 className={style.banner__title}>Uma nova experiência!</h1>
        <img src={kingburger} alt="King Burger" />
        <p className={style.banner__text}>
          Para quem tem um <span>Apetite de um REI!</span>
        </p>
        <button>Comprar Agora</button>
      </div>
      <Menu />
    </section>
  );
}

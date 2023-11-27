import React from "react";
import style from "./Banner.module.scss";
import Menu from "components/Menu";

export default function Banner() {
  return (
    <section id="home" className={style.banner}>
      <div className={style.banner__content}>
        <p className={style.banner__title}>Uma nova experiência!</p>
        <h1 className={style.banner__principal}>
          KING <span>BURGER</span>
        </h1>
        <p className={style.banner__text}>
          Para quem tem um <span>Apetite de um REI!</span>
        </p>
        <button>Comprar Agora</button>
      </div>
      <Menu />
    </section>
  );
}

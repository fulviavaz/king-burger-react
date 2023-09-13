import React from "react";
import style from "./Menu.module.scss";
import { ReactComponent as Burger } from "assets/burger.svg";
import { ReactComponent as Atendimento } from "assets/atendimento.svg";
import { ReactComponent as Delivery } from "assets/delivery.svg";

export default function Menu() {
  return (
    <>
      <div className={style.menu}>
        <div className={style.menu__item}>
          <div className={style.menu__icon}>
            <Burger />
          </div>
          <div className={style.menu__text}>
            <h2>
              ARTESANAL
              <br />
              <span>Nossas receitas são feitas com todo cuidado</span>
            </h2>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="85"
          viewBox="0 0 2 85"
          fill="none"
        >
          <path
            d="M0.610107 0.732422V84.2637"
            stroke="#492E15"
            strokeOpacity="0.15"
          />
        </svg>
        <div className={style.menu__item}>
          <div className={style.menu__icon}>
            <Atendimento />
          </div>
          <div className={style.menu__text}>
            <h2>
              ATENDIMENTO
              <br />
              <span>Totalmente personalizado</span>
            </h2>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="85"
          viewBox="0 0 2 85"
          fill="none"
        >
          <path
            d="M0.610107 0.732422V84.2637"
            stroke="#492E15"
            strokeOpacity="0.15"
          />
        </svg>
        <div className={style.menu__item}>
          <div className={style.menu__icon}>
            <Delivery />
          </div>
          <div className={style.menu__text}>
            <h2>
              DELIVERY SPEED
              <br />
              <span>Entregamos menos de 45 minutos</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

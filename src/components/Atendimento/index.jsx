import React from "react";
import style from "./Atendimeto.module.scss";
import queen from "../../assets/queen.png";

export default function Atendimento() {
  return (
    <section className={style.atendimento}>
      <div className={style.atendimento__left}>
        <img
          src={queen}
          alt="Mulher loira vestindo uma camiseta amarela, com uma coroa na cabeça provando um lanche delicioso"
        />
      </div>
      <div className={style.atendimento__right}>
        <h2 className={style.atendimento__title}>
          Atendimento <span>personalizado</span>
        </h2>
        <p className={style.atendimento__text}>
          Todos os nossos clientes são tratados como rei e rainha, com a nossa
          colunaria artesanal.
        </p>
        <button className={style.atendimento__btn}>Cardápio Imperial</button>
      </div>
    </section>
  );
}

import React from "react";
import styles from "./Entregas.module.scss";
import entregas from "../../assets/entregas.png";
import whatts from "../../assets/whatts.svg";
import entrega from "../../assets/entrega.svg";
import sobremesa from "../../assets/sobremesa.svg";
import ifood from "../../assets/ifoodent.svg";
import phone from "../../assets/phone.svg";

export default function Entregas() {
  return (
    <section id="contato" className={styles.entregas}>
      <div className={styles.entregas__line}></div>
      <div className={styles.entregas__container}>
        <div className={styles.entregas__right}>
          <img
            src={entregas}
            alt="imagem de um celular com uma lanche saindo dele"
          />
        </div>
        <div className={styles.entregas__left}>
          <h2 className={styles.entregas__left__title}>Nossas entregas</h2>

          <div className={styles.entregas__left__iten}>
            <div className={styles.entregas__left__icon}>
              <img src={whatts} alt="icone whattsapp" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="47"
              viewBox="0 0 2 47"
              fill="none"
            >
              <path
                d="M1 1.16992C1.24198 1.16992 1.10083 31.3726 1 46.4739"
                stroke="#1D0605"
                strokeOpacity="0.4"
                strokeLinecap="round"
              />
            </svg>
            <div className={styles.entregas__left__text}>
              <h3>Whatsapp</h3>
              <p>Vamos direto ao ponto, sem perder tempo!</p>
            </div>
          </div>

          <div className={styles.entregas__left__iten}>
            <div className={styles.entregas__left__icon}>
              <img src={entrega} alt="icone entrega" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="47"
              viewBox="0 0 2 47"
              fill="none"
            >
              <path
                d="M1 1.16992C1.24198 1.16992 1.10083 31.3726 1 46.4739"
                stroke="#1D0605"
                strokeOpacity="0.4"
                strokeLinecap="round"
              />
            </svg>
            <div className={styles.entregas__left__text}>
              <h3>Entrega</h3>
              <p>Entregamos menos de 45 minutos na porta da sua casa!</p>
            </div>
          </div>

          <div className={styles.entregas__left__iten}>
            <div className={styles.entregas__left__icon}>
              <img src={sobremesa} alt="icone sobremesa" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="47"
              viewBox="0 0 2 47"
              fill="none"
            >
              <path
                d="M1 1.16992C1.24198 1.16992 1.10083 31.3726 1 46.4739"
                stroke="#1D0605"
                strokeOpacity="0.4"
                strokeLinecap="round"
              />
            </svg>
            <div className={styles.entregas__left__text}>
              <h3>Sobremesa</h3>
              <p>Pedidos assima de 100 reais, ganham brindes.</p>
            </div>
          </div>

          <div className={styles.entregas__left__iten}>
            <div className={styles.entregas__left__icon}>
              <img src={ifood} alt="icone ifood" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="47"
              viewBox="0 0 2 47"
              fill="none"
            >
              <path
                d="M1 1.16992C1.24198 1.16992 1.10083 31.3726 1 46.4739"
                stroke="#1D0605"
                strokeOpacity="0.4"
                strokeLinecap="round"
              />
            </svg>
            <div className={styles.entregas__left__text}>
              <h3>Ifood</h3>
              <p>Nossa loja é Top 1 da região!</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.entregas__pedido}>
        <div className={styles.entregas__pedido__icon}>
          <img src={phone} alt="icone telefone" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="85"
          viewBox="0 0 2 85"
          fill="none"
        >
          <path
            d="M0.586914 1.14941V83.8904"
            stroke="#1D0605"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
        </svg>
        <div className={styles.entregas__pedido__text}>
          <h3>faça o seu pedido agora mesmo!</h3>
          <p>
            Venha saborear a melhor experiência de hamburguenses artesanal do
            <span> Empires Burger,</span> com temática medieval!
          </p>
        </div>
        <button>Solicitar Pedido</button>
      </div>
    </section>
  );
}

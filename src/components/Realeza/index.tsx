import React from "react";
import styles from "./Realeza.module.scss";
import photo from "../../assets/photo.png";

export default function Realeza() {
  return (
    <section className={styles.realeza}>
      <h2 className={styles.realeza__title}>Nossa realeza</h2>
      <p className={styles.realeza__text}>
        A satisfação de nossos clientes em primeiro lugar!
      </p>
      <div className={styles.realeza__container}>
        <div className={styles.realeza__card}>
          <p className={styles.realeza__card__depoimento}>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin.”
          </p>
          <div className={styles.realeza__card__data}>
            <div className={styles.realeza__card__photo}>
              <img src={photo} alt="Foto de perfil" />
            </div>
            <div className={styles.realeza__card__subject}>
              <p className={styles.realeza__card__name}>Carla gomes</p>
              <p className={styles.realeza__card__job}>23 Anos • Designer</p>
            </div>
          </div>
        </div>

        <div className={styles.realeza__card}>
          <p className={styles.realeza__card__depoimento}>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin.”
          </p>
          <div className={styles.realeza__card__data}>
            <div className={styles.realeza__card__photo}>
              <img src={photo} alt="Foto de perfil" />
            </div>
            <div className={styles.realeza__card__subject}>
              <p className={styles.realeza__card__name}>Carla gomes</p>
              <p className={styles.realeza__card__job}>23 Anos • Designer</p>
            </div>
          </div>
        </div>

        <div className={styles.realeza__card}>
          <p className={styles.realeza__card__depoimento}>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin.”
          </p>
          <div className={styles.realeza__card__data}>
            <div className={styles.realeza__card__photo}>
              <img src={photo} alt="Foto de perfil" />
            </div>
            <div className={styles.realeza__card__subject}>
              <p className={styles.realeza__card__name}>Carla gomes</p>
              <p className={styles.realeza__card__job}>23 Anos • Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

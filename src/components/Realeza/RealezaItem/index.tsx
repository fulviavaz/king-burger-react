import React from "react";
import styles from "../Realeza.module.scss";

interface RealezaProps {
  name: string;
  image: string;
  age: number;
  testimonial: string;
}

export default function RealezaItem({
  name,
  image,
  age,
  testimonial,
}: RealezaProps) {
  return (
    <div className={styles.realeza__card}>
      <p className={styles.realeza__card__depoimento}>{testimonial}</p>
      <div className={styles.realeza__card__data}>
        <div className={styles.realeza__card__photo}>
          <img src={image} alt="Foto de perfil" />
        </div>
        <div className={styles.realeza__card__subject}>
          <p className={styles.realeza__card__name}>{name}</p>
          <p className={styles.realeza__card__job}>{age} • Designer</p>
        </div>
      </div>
    </div>
  );
}

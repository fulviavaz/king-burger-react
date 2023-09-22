import React from "react";
import styles from "./Map.module.scss";
import GoogleApiWrapper from "./MapView";

export default function Map() {
  return (
    <section id="map" className={styles.map}>
      <div className={styles.map__container}>
        <div className={styles.map__text}>
          <h2>Onde fica o nosso castelo</h2>
          <p>Estaremos de portas abertas para a nossa realeza.</p>
        </div>
        <div className={styles.map}>
          <GoogleApiWrapper />
        </div>
      </div>
    </section>
  );
}

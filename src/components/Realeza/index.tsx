import React, { useEffect, useState } from "react";
import styles from "./Realeza.module.scss";
import RealezaItem from "./RealezaItem";

export default function Realeza() {
  const [data, setData] = useState([
    {
      name: "",
      image: "",
      age: 0,
      testimonial: "",
    },
  ]);

  useEffect(() => {
    fetch("https://api.brchallenges.com/api/empire-burger/testimonials")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section id="comentarios" className={styles.realeza}>
      <h2 className={styles.realeza__title}>Nossa realeza</h2>
      <p className={styles.realeza__text}>
        A satisfação de nossos clientes em primeiro lugar!
      </p>
      <div className={styles.realeza__container}>
        {data.length > 0 &&
          data.map((item) => (
            <RealezaItem
              key={item.name}
              name={item.name}
              image={item.image}
              age={item.age}
              testimonial={item.testimonial}
            />
          ))}
      </div>
    </section>
  );
}

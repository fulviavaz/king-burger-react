import React, { useEffect, useState } from "react";
import styles from "./Realeza.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import RealezaItem from "./RealezaItem";

interface TestData {
  name: string;
  image: string;
  age: number;
  testimonial: string;
}

export default function Realeza() {
  const [data, setData] = useState<TestData[]>([]);

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
        {data.length > 0 && (
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
          >
            {data.map((item) => (
              <SwiperSlide key={item.name}>
                <RealezaItem
                  name={item.name}
                  image={item.image}
                  age={item.age}
                  testimonial={item.testimonial}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

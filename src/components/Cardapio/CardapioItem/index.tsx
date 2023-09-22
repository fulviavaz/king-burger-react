import UINumber from "components/UINumber";
import styles from "../Cardapio.module.scss";

interface CardapioProps {
  plate: string;
  price: number;
  ingredients: string;
}
export default function CardapioItem({
  plate,
  price,
  ingredients,
}: CardapioProps) {
  return (
    <div className={styles.cardapio__right__item}>
      <h3 className={styles.cardapio__right__subtitle}>
        {plate}
        .........................................................................
        <UINumber>{price}</UINumber>
      </h3>
      <p className={styles.cardapio__right__description}>{ingredients}</p>
    </div>
  );
}

import React from "react";

interface UINumberProps {
  children: number;
}

export default function UINumber({ children }: UINumberProps) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return <span>{formatter.format(children)}</span>;
}

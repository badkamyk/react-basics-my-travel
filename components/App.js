import React from "react";
import Nav from "./Nav";
import Card from "./Card";
import data from "../data";

const cardElements = data.map((card) => {
  return <Card key={card.id} {...card} />;
});

export default function App() {
  return (
    <div>
      <Nav />
      {cardElements}
    </div>
  );
}

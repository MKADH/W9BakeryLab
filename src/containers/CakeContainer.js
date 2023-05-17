import React, { useState } from 'react';
import Cake from '../components/Cake';
const CakeContainer = () => {
  const [cakes] = useState([
    {
      cakeName: "Victoria Sponge",
      ingredients: [
        "eggs",
        "butter",
        "sugar",
        "self-raising flour",
        "baking powder",
        "milk"
      ],
      price: 5,
      rating: 5
    },
    {
      cakeName: "Tea Loaf",
      ingredients: [
        "eggs",
        "oil",
        "dried fruit",
        "sugar",
        "self-raising flour",
        "strong tea",
      ],
      price: 2,
      rating: 3
    },
    {
      cakeName: "Carrot Cake",
      ingredients: [
        "carrots",
        "walnuts",
        "oil",
        "cream cheese",
        "flour",
        "sugar",
      ],
      price: 8,
      rating: 5
    }
  ]);
  const [totalValue, setTotalValue] = useState(0);
  const sellCake = (price) => {
    setTotalValue(totalValue + price);
  };
  return (
    <div>
      <h2>BNTA Bakery</h2>
      {cakes.map((cake, index) => (
        <Cake key={index} cake={cake} sellCake={sellCake} />
      ))}
      <h3>Value of cake sold in £: {totalValue}</h3>
    </div>
  );
};
export default CakeContainer;
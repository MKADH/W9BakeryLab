import React from 'react';
const Cake = ({ cake, sellCake }) => {
  const { cakeName, ingredients, price, rating } = cake;
  const handleSellCake = () => {
    sellCake(price);
  };
  return (
    <div>
      <h3>{cakeName}</h3>
      <p>Price: £{price}</p>
      <p>Rating: {rating}/5</p>
      <h4>Ingredients:</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button onClick={handleSellCake}>Sell Cake</button>
    </div>
  );
};
export default Cake;
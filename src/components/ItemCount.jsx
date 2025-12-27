import React, { useState } from "react";
import "../styles/itemcount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <div className="item-count">
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>

      <button className="add-cart" onClick={handleAdd} disabled={stock === 0}>
        Agregar al carrito
      </button>

      {stock === 0 && <p>Sin stock disponible</p>}
    </div>
  );
};

export default ItemCount;

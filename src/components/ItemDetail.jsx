import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  if (!item) return <p>Cargando...</p>;

  const handleAddToCart = (cantidad) => {
    console.log(`Agregaste ${cantidad} ${item.nombre}(s) al carrito`);
  
  };

  return (
    <div className="nosotros-container">
      <h2>{item.nombre}</h2>
      <img src={item.imagen} alt={item.nombre} style={{ width: "300px" }} />
      <p>
        <strong>Sexo:</strong> {item.sexo}
      </p>
      <p>
        <strong>Raza:</strong> {item.raza}
      </p>
      <p>
        <strong>Edad:</strong> {item.edad}
      </p>

      <ItemCount stock={item.stock} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetail;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/itemlist.css";

const ItemList = ({ items }) => {
  return (
    <div className="cards-grid">
      {items.map((item) => (
        <div key={item.id} className="card">
          <img src={item.imagen} alt={item.nombre} />

          <div className="card-info">
            <h3>{item.nombre}</h3>

            <p>
              <strong>Sexo:</strong> {item.sexo}
            </p>

            <p>
              <strong>Raza:</strong> {item.raza}
            </p>

            <p>
              <strong>Edad:</strong> {item.edad}
            </p>

            <Link to={`/animales/detalle/${item.id}`} className="btn-detalle">
              Ver más
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

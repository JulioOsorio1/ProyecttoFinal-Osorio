import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { bovinos } from "../data/bovinos";

const ItemListContainer = ({ sexo }) => {
  const [animales, setAnimales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const filtrados = sexo
        ? bovinos.filter((animal) => animal.sexo === sexo)
        : bovinos;
      setAnimales(filtrados);
      setLoading(false);
    }, 3000);
  }, [sexo]);

  if (loading) {
    return <p className="nosotros-container p">Cargando animales...</p>;
  }
  return (
    <>
      <div className="itemlist-container">
        <h2 className="footer p">Lista de Bovinos</h2>
        <ItemList items={animales} />
      </div>
    </>
  );
};

export default ItemListContainer;

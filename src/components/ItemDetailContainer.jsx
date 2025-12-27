import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { bovinos } from "../data/bovinos";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Simulación de carga
    setTimeout(() => {
      const foundItem = bovinos.find((animal) => animal.id === parseInt(id));

      if (foundItem) {
        setItem(foundItem);
        setNotFound(false);
      } else {
        setNotFound(true);
      }

      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return <p className="nosotros-container p">Cargando animal ...</p>;
  }

  if (notFound) {
    return (
      <p className="nosotros-container p">
        Este animal no esta en nuestra lista.
      </p>
    );
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

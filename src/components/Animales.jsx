import React from "react";
import "../styles/nosotros.css";
import ItemListContainer from "./ItemListContainer";

const Animales = () => {
  return (
    <>
      <div className="nosotros-container">
        <h1 className="">Nuestros ejemplares</h1>
        <p>Contamos con la mejor genetica del mercado.</p>
      </div>
      <ItemListContainer />
    </>
  );
};

export default Animales;

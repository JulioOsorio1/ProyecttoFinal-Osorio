import React from "react";
import "./App.css";

import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";
import NotFound from "./components/NotFound.jsx";

import Cart from "./components/Cart.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        
        <Route path="/" element={<Navigate to="/home" replace />} />

        
        <Route path="/home" element={<Home />} />

      
        <Route path="/animales" element={<ItemListContainer />} />

       
        <Route
          path="/animales/categoria/:categoriaId"
          element={<ItemListContainer />}
        />

       
        <Route path="/animales/detalle/:id" element={<ItemDetailContainer />} />

        
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />

       
        <Route path="/cart" element={<Cart />} />

       
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

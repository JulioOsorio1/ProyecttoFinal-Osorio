import React from "react";
import { useCart } from "../CartContext.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return <h4>El carrito está vacío</h4>;
  }

  return (
    <div className="">
      <h2>Mi Carrito</h2>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.nombre} x {item.quantity} — ${item.precio * item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <p>
        <strong>Total: </strong>${totalPrice()}
      </p>

      <button onClick={clearCart}>Vaciar carrito</button>

      <br />
      <br />

      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;

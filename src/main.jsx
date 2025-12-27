import { createRoot } from "react-dom/client";
import App from "../src/App.jsx";
import { CartProvider } from "./CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);

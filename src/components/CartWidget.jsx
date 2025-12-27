import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      <span style={{ fontSize: "24px" }}>🛒</span>

      {totalItems() > 0 && <span className="cart-count">{totalItems()}</span>}
    </Link>
  );
};

export default CartWidget;
